"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[808],{6380:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var o=i(7624),s=i(2172);const t={id:"configuring-published-files",title:"Configuring Published Files",type:"explainer"},c="Configuring Published Files",r={id:"concepts/configuring-published-files",title:"Configuring Published Files",description:"When publishing a package to a registry, the default is to publish everything in the package's source directory. This is not always optimal, since there are often files only relevant for development, such as tests and configuration files, and it could be that you first compile your source files and output them to a centralized location in a monorepo setup.",source:"@site/docs/concepts/configuring-published-files.md",sourceDirName:"concepts",slug:"/concepts/configuring-published-files",permalink:"/docs/concepts/configuring-published-files",draft:!1,unlisted:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/concepts/configuring-published-files.md",tags:[],version:"current",frontMatter:{id:"configuring-published-files",title:"Configuring Published Files",type:"explainer"},sidebar:"main",previous:{title:"Distributed Task Execution Guide",permalink:"/docs/concepts/dte-guide"},next:{title:"Using pnpm with Lerna",permalink:"/docs/recipes/using-pnpm-with-lerna"}},a={},d=[{value:"<code>&quot;files&quot;</code> and .gitignore",id:"files-and-gitignore",level:2},{value:"<code>--contents</code> [legacy -&gt; prefer <code>--directory</code>]",id:"--contents-legacy---prefer---directory",level:2},{value:"<code>--directory</code>",id:"--directory",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configuring-published-files",children:"Configuring Published Files"}),"\n",(0,o.jsx)(n.p,{children:"When publishing a package to a registry, the default is to publish everything in the package's source directory. This is not always optimal, since there are often files only relevant for development, such as tests and configuration files, and it could be that you first compile your source files and output them to a centralized location in a monorepo setup."}),"\n",(0,o.jsx)(n.p,{children:"Lerna provides a number of configuration options to ensure that only the appropriate files are packed and published to a registry."}),"\n",(0,o.jsxs)(n.h2,{id:"files-and-gitignore",children:[(0,o.jsx)(n.code,{children:'"files"'})," and .gitignore"]}),"\n",(0,o.jsxs)(n.p,{children:['Lerna always publishes using npm\'s tooling, and it has a few built in ways to include or exclude files. The easiest way to configure which files are included in the published package are via the "files" property in ',(0,o.jsx)(n.code,{children:"package.json"})," and ",(0,o.jsx)(n.code,{children:".gitignore"}),". See the ",(0,o.jsx)(n.a,{href:"https://docs.npmjs.com/cli/v7/commands/npm-publish#files-included-in-package",children:"npm documentation"})," for more information on how npm recognizes files for publishing."]}),"\n",(0,o.jsxs)(n.h2,{id:"--contents-legacy---prefer---directory",children:[(0,o.jsx)(n.code,{children:"--contents"})," [legacy -> prefer ",(0,o.jsx)(n.code,{children:"--directory"}),"]"]}),"\n",(0,o.jsxs)(n.p,{children:["A number of commands, including ",(0,o.jsx)(n.code,{children:"lerna publish"}),", support a generalized ",(0,o.jsx)(n.code,{children:"--contents"})," option, which sets the directory to publish for ALL packages."]}),"\n",(0,o.jsxs)(n.p,{children:["This is only useful for publishing if the packages in your monorepo have a simplistic, uniform output structure. The argument passed to ",(0,o.jsx)(n.code,{children:"--contents"})," must be a subdirectory that exists within every package being published. See the ",(0,o.jsx)(n.a,{href:"https://github.com/lerna/lerna/tree/main/libs/commands/publish#--contents-dir",children:"lerna publish documentation"})," for details."]}),"\n",(0,o.jsxs)(n.p,{children:["In v7, we introduced a more powerful, more focused ",(0,o.jsx)(n.code,{children:"--directory"})," option for ",(0,o.jsx)(n.code,{children:"lerna publish"}),". Please prefer that over the ",(0,o.jsx)(n.code,{children:"--contents"})," option, which will likely be deprecated in future."]}),"\n",(0,o.jsx)(n.h2,{id:"--directory",children:(0,o.jsx)(n.code,{children:"--directory"})}),"\n",(0,o.jsxs)(n.p,{children:["In v7, we introduced a more powerful, more focused ",(0,o.jsx)(n.code,{children:"--directory"})," option for ",(0,o.jsx)(n.code,{children:"lerna publish"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["It can be configured in your ",(0,o.jsx)(n.code,{children:"lerna.json"})," and supports using the following dynamic placeholders: ",(0,o.jsx)(n.code,{children:"{workspaceRoot}"}),", ",(0,o.jsx)(n.code,{children:"{projectRoot}"}),", ",(0,o.jsx)(n.code,{children:"{projectName}"}),". These values will be dynamically replaced at publish time."]}),"\n",(0,o.jsx)(n.p,{children:"This means you can now succinctly express setups which are uniform in terms of their style, but not literally identical across all packages."}),"\n",(0,o.jsx)(n.p,{children:"For example, let's say we have a monorepo where we build all packages and their outputs are set to go to a centralized location (as is common in Nx workspaces, for example):"}),"\n",(0,o.jsxs)(n.p,{children:["We have ",(0,o.jsx)(n.code,{children:"packages/package-a"})," which writes its build output to ",(0,o.jsx)(n.code,{children:"dist/packages/package-a"}),", and ",(0,o.jsx)(n.code,{children:"packages/package-b"})," which writes its build output to ",(0,o.jsx)(n.code,{children:"dist/packages/package-b"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Even though the paths are strictly different, we have a consistent approach we can now express using the placeholders:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"{workspaceRoot}/dist/{projectRoot}"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"{workspaceRoot}"})," will be replaced by the absolute path to our lerna repo, and ",(0,o.jsx)(n.code,{children:"{projectRoot}"})," will be replace by ",(0,o.jsx)(n.code,{children:"packages/package-a"})," in the case of ",(0,o.jsx)(n.code,{children:"package-a"}),", and ",(0,o.jsx)(n.code,{children:"packages/package-b"})," in the case of ",(0,o.jsx)(n.code,{children:"package-b"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The way we apply that in the ",(0,o.jsx)(n.code,{children:"lerna.json"})," is as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'// lerna.json\n{\n  "version": "1.0.0",\n  "command": {\n    "publish": {\n      "directory": "{workspaceRoot}/dist/{projectRoot}"\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can also set or override the publish directory option within a package's ",(0,o.jsx)(n.code,{children:"package.json"}),", if you need to something completely custom for that particular package."]}),"\n",(0,o.jsxs)(n.p,{children:["An example configuration for a package that publishes from a ",(0,o.jsx)(n.code,{children:"dist/packages/foo"})," folder in the root of the repo:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'// packages/foo/package.json\n{\n  "name": "foo",\n  "version": "1.0.0",\n  "lerna": {\n    "command": {\n      "publish": {\n        "directory": "../../dist/packages/foo"\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["You will need to make sure that your custom directory location contains a valid ",(0,o.jsx)(n.code,{children:"package.json"})," which will be used for the registry publish. You could create this via a lifecycle script such as ",(0,o.jsx)(n.code,{children:"prepare"}),", ",(0,o.jsx)(n.code,{children:"prepublishOnly"}),", or ",(0,o.jsx)(n.code,{children:"prepack"})," if you need more complex custom logic involved, or simply have it copied for you from the package's source automatically by configuring it as an asset. See the upcoming section on ",(0,o.jsx)(n.strong,{children:"Including Additional Assets in Published Packages"})," for full details."]})}),"\n",(0,o.jsx)(n.p,{children:"If you wanted to make one of your packages behave like a standard lerna package and publish from source, you could override its publish config like so:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'// packages/foo/package.json\n{\n  "name": "foo",\n  "version": "1.0.0",\n  "lerna": {\n    "command": {\n      "publish": {\n        "directory": "."\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h1,{id:"including-additional-assets-in-published-packages",children:"Including Additional Assets in Published Packages"}),"\n",(0,o.jsxs)(n.p,{children:["Lerna can copy files from your source directory to the directory specified for publishing. Just as with the ",(0,o.jsx)(n.code,{children:"directory"})," option, this can be configured in the ",(0,o.jsx)(n.code,{children:"lerna.json"})," (including using dynamic placeholders within asset definitions), or within the ",(0,o.jsx)(n.code,{children:"package.json"})," of a particular package."]}),"\n",(0,o.jsxs)(n.p,{children:["Regardless of which file it is configured in, the ",(0,o.jsx)(n.code,{children:'"assets"'})," property should be an array of glob patterns or objects with a ",(0,o.jsx)(n.code,{children:'"from"'})," and ",(0,o.jsx)(n.code,{children:'"to"'})," property. The ",(0,o.jsx)(n.code,{children:'"from"'})," property should be a specific file or glob pattern that matches files in the source directory, and the ",(0,o.jsx)(n.code,{children:'"to"'})," property is the path to copy the file to within the publish directory."]}),"\n",(0,o.jsxs)(n.p,{children:["This example package builds its output to a root ",(0,o.jsx)(n.code,{children:"dist/packages/bar"})," directory. Lerna is configured to copy additional files to this directory, then publish the contents of ",(0,o.jsx)(n.code,{children:"dist/packages/bar"})," to npm."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'// packages/bar/package.json\n{\n  "name": "bar",\n  "version": "1.0.0",\n  "lerna": {\n    "command": {\n      "publish": {\n        "directory": "../../dist/packages/bar",\n        "assets": [\n          "README.md",\n          "package.json",\n          "docs/*.md",\n          {\n            "from": "static/images/*",\n            "to": "assets"\n          },\n          {\n            "from": "../../CONTRIBUTING.md",\n            "to": "./"\n          }\n        ]\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Lerna will consume the above configuration and copy the appropriate files to the dist directory, producing a structure like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"dist/packages/bar\n\u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 my-image-1.png\n\u2502   \u2514\u2500\u2500 my-image-2.png\n\u251c\u2500\u2500 CONTRIBUTING.md\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 my-doc-1.md\n\u2502   \u2514\u2500\u2500 my-doc-2.md\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 README.md\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>c});var o=i(1504);const s={},t=o.createContext(s);function c(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);