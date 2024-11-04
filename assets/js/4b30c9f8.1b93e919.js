"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[234],{9994:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(4848),t=s(8453);const i={id:"lerna-and-nx",title:"Lerna and Nx",type:"explainer"},a="Lerna and Nx",l={id:"lerna-and-nx",title:"Lerna and Nx",description:"Nrwl (the company behind the open source build system Nx) has taken over stewardship of Lerna. Nx is a build system developed by ex-Googlers and utilizes many of the techniques used by internal Google tools. Lerna uses Nx to detect packages in the workspace and dependencies between them. Lerna defers to Nx's powerful task runner to run scripts, allowing you to run them in parallel, cache results, and distribute them across multiple machines, all while ensuring that dependencies between packages are respected. For a complete list of which Lerna versions are compatible with which Nx versions, see the Lerna and Nx Version Matrix.",source:"@site/docs/lerna-and-nx.md",sourceDirName:".",slug:"/lerna-and-nx",permalink:"/docs/lerna-and-nx",draft:!1,unlisted:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/lerna-and-nx.md",tags:[],version:"current",frontMatter:{id:"lerna-and-nx",title:"Lerna and Nx",type:"explainer"},sidebar:"main",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Features",permalink:"/docs/features"}},o={},d=[{value:"Lerna",id:"lerna",level:2},{value:"Features",id:"features",level:3},{value:"Cost",id:"cost",level:3},{value:"Set up",id:"set-up",level:3},{value:"Nx",id:"nx",level:2},{value:"Features",id:"features-1",level:3},{value:"Cost",id:"cost-1",level:3},{value:"Set up",id:"set-up-1",level:3},{value:"Nx Cloud",id:"nx-cloud",level:2},{value:"Features",id:"features-2",level:3},{value:"Cost",id:"cost-2",level:3},{value:"Set up",id:"set-up-2",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"lerna-and-nx",children:"Lerna and Nx"})}),"\n",(0,r.jsxs)(n.p,{children:["Nrwl (the company behind the open source build system Nx) has taken over ",(0,r.jsx)(n.a,{href:"https://dev.to/nrwl/lerna-is-dead-long-live-lerna-3jal",children:"stewardship of Lerna"}),". ",(0,r.jsx)(n.a,{href:"https://nx.dev",children:"Nx"})," is a build system developed by ex-Googlers and utilizes many of the techniques used by internal Google tools. Lerna uses Nx to detect packages in the workspace and dependencies between them. Lerna defers to Nx's powerful task runner to run scripts, allowing you to run them in parallel, cache results, and distribute them across multiple machines, all while ensuring that dependencies between packages are respected. For a complete list of which Lerna versions are compatible with which Nx versions, see the ",(0,r.jsx)(n.a,{href:"./lerna-and-nx-version-matrix",children:"Lerna and Nx Version Matrix"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The following is a high level overview of what each tool provides. Lerna can continue to be used by itself, and adding Nx Cloud for free on top can dramatically improve what you're already doing."}),"\n",(0,r.jsx)(n.h2,{id:"lerna",children:"Lerna"}),"\n",(0,r.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"./features/version-and-publish",children:"Version"})," - Automatically increment versions of packages, generate changelog information, create GitHub releases etc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"./features/version-and-publish",children:"Publish"})," - Automatically create tags and publish packages to package registries, such as npm."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"cost",children:"Cost"}),"\n",(0,r.jsx)(n.p,{children:"Free and open source"}),"\n",(0,r.jsx)(n.h3,{id:"set-up",children:"Set up"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"npm install lerna"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"npx lerna init"})}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"nx",children:"Nx"}),"\n",(0,r.jsx)(n.h3,{id:"features-1",children:"Features"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./features/run-tasks",children:"Run only tasks affected by a code change"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./features/run-tasks",children:"Run prerequisite tasks first"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./features/cache-tasks",children:"Cache task results locally"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./features/project-graph",children:"Visualize the project graph"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"./features/editor-integrations#nx-console-for-vscode",children:"Nx Console"})," - Visual Studio Code plugin"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"cost-1",children:"Cost"}),"\n",(0,r.jsx)(n.p,{children:"Free and open source"}),"\n",(0,r.jsx)(n.h3,{id:"set-up-1",children:"Set up"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"npx lerna add-caching"})}),"\n",(0,r.jsx)(n.li,{children:"Continue using Lerna as usual"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Lerna defers to Nx's power task runner behind the scenes to detect task dependencies. Some options for ",(0,r.jsx)(n.code,{children:"lerna run"})," behave differently than in older versions of Lerna. See ",(0,r.jsx)(n.a,{href:"/docs/lerna6-obsolete-options",children:"Using Lerna (Powered by Nx) to Run Tasks"})," for more details on what differs from older versions of Lerna."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"nx-cloud",children:"Nx Cloud"}),"\n",(0,r.jsx)(n.h3,{id:"features-2",children:"Features"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./features/cache-tasks",children:"Share cached task results across the organization"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"./features/distribute-tasks",children:"Distribute task execution"})," efficiently across agent machines"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"cost-2",children:"Cost"}),"\n",(0,r.jsx)(n.p,{children:"Free for open source projects"}),"\n",(0,r.jsx)(n.p,{children:"For closed source repositories, the first 500 computation hours per month are free. Most repositories do not exceed this limit. $1 per computation hour after that."}),"\n",(0,r.jsx)(n.h3,{id:"set-up-2",children:"Set up"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"npx nx connect-to-nx-cloud"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nx generate @nrwl/workspace:ci-workflow"})," (or set up your CI manually)"]}),"\n",(0,r.jsx)(n.li,{children:"Continue using Lerna as usual"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(6540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);