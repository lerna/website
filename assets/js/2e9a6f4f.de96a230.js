"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[980],{8427:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var r=s(4848),i=s(8453);const c={},o="Using pnpm with Lerna",l={id:"recipes/using-pnpm-with-lerna",title:"Using pnpm with Lerna",description:"Lerna can be used in a pnpm workspace to get the full benefits of both pnpm and Lerna.",source:"@site/docs/recipes/using-pnpm-with-lerna.md",sourceDirName:"recipes",slug:"/recipes/using-pnpm-with-lerna",permalink:"/docs/recipes/using-pnpm-with-lerna",draft:!1,unlisted:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/recipes/using-pnpm-with-lerna.md",tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"Configuring Published Files",permalink:"/docs/concepts/configuring-published-files"},next:{title:"Commands",permalink:"/docs/api-reference/commands"}},t={},a=[{value:"Getting Started",id:"getting-started",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"using-pnpm-with-lerna",children:"Using pnpm with Lerna"})}),"\n",(0,r.jsxs)(n.p,{children:["Lerna can be used in a ",(0,r.jsxs)(n.a,{href:"https://pnpm.io/workspaces",children:[(0,r.jsx)(n.code,{children:"pnpm"})," workspace"]})," to get the full benefits of both ",(0,r.jsx)(n.a,{href:"https://pnpm.io",children:(0,r.jsx)(n.code,{children:"pnpm"})})," and Lerna."]}),"\n",(0,r.jsxs)(n.p,{children:["When used in a ",(0,r.jsx)(n.code,{children:"pnpm"})," workspace, Lerna will:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["resolve package locations with ",(0,r.jsx)(n.code,{children:"pnpm-workspace.yaml"})," (",(0,r.jsx)(n.a,{href:"https://pnpm.io/workspaces",children:"https://pnpm.io/workspaces"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["ignore ",(0,r.jsx)(n.code,{children:'"workspaces"'})," in ",(0,r.jsx)(n.code,{children:"package.json"})]}),"\n",(0,r.jsxs)(n.li,{children:["block usage of ",(0,r.jsx)(n.code,{children:"bootstrap"}),", ",(0,r.jsx)(n.code,{children:"link"}),", and ",(0,r.jsx)(n.code,{children:"add"})," commands. Instead, you should use ",(0,r.jsx)(n.code,{children:"pnpm"})," commands directly to manage dependencies (",(0,r.jsx)(n.a,{href:"https://pnpm.io/cli/install",children:"https://pnpm.io/cli/install"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["respect the ",(0,r.jsx)(n.a,{href:"https://pnpm.io/workspaces#workspace-protocol-workspace",children:"workspace protocol"})," for package dependencies.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["During ",(0,r.jsx)(n.code,{children:"lerna version"}),", dependencies will be updated as normal, but will preserve the ",(0,r.jsx)(n.code,{children:"workspace:"})," prefix if it exists."]}),"\n",(0,r.jsxs)(n.li,{children:["If a ",(0,r.jsx)(n.a,{href:"https://pnpm.io/workspaces#referencing-workspace-packages-through-aliases",children:"workspace alias"})," is used, then ",(0,r.jsx)(n.code,{children:"lerna version"})," will not bump the version of the dependency, since aliases don't specify a version number to bump."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(n.p,{children:"To set up pnpm with Lerna:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If not installed already, install ",(0,r.jsx)(n.code,{children:"pnpm"}),": ",(0,r.jsx)(n.a,{href:"https://pnpm.io/installation",children:"https://pnpm.io/installation"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Remove the ",(0,r.jsx)(n.code,{children:"node_modules/"})," folder in the root, if it exists. If not already using workspaces, run ",(0,r.jsx)(n.code,{children:"lerna clean"})," to remove the ",(0,r.jsx)(n.code,{children:"node_modules/"})," folder in all packages."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:'"npmClient": "pnpm"'})," in ",(0,r.jsx)(n.code,{children:"lerna.json"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"pnpm-workspace.yaml"}),' file in the root of your project.\nIf you are already using npm or yarn workspaces, move the "workspaces" property from ',(0,r.jsx)(n.code,{children:"package.json"})," to ",(0,r.jsx)(n.code,{children:"pnpm-workspace.yaml"}),'. If you were not already using workspaces, move the "packages" property from ',(0,r.jsx)(n.code,{children:"lerna.json"})," to ",(0,r.jsx)(n.code,{children:"pnpm-workspace.yaml"}),". For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "workspaces": ["packages/*"]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"and"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="lerna.json"',children:'{\n  "packages": ["packages/*"]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"become:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',children:'packages:\n  - "packages/*"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["(optional) Run ",(0,r.jsx)(n.code,{children:"pnpm import"})," to generate a ",(0,r.jsx)(n.code,{children:"pnpm-lock.yaml"})," file from an existing lockfile. See ",(0,r.jsx)(n.a,{href:"https://pnpm.io/cli/import",children:"https://pnpm.io/cli/import"})," for supported lockfile sources."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"pnpm install"}),"."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(6540);const i={},c=r.createContext(i);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);