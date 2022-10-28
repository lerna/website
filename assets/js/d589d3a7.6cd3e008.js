"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||l;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={id:"getting-started",title:"Getting Started",type:"tutorial"},i="Getting Started",o={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"You can incrementally adopt Lerna for existing monorepos or create a new Lerna workspace by running:",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",type:"tutorial"},sidebar:"main",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Lerna and Nx",permalink:"/docs/lerna-and-nx"}},s={},p=[{value:"Adding Lerna",id:"adding-lerna",level:2},{value:"Visualizing Workspace",id:"visualizing-workspace",level:2},{value:"Bootstrapping Projects",id:"bootstrapping-projects",level:2},{value:"Building All Projects",id:"building-all-projects",level:2},{value:"Testing All Projects",id:"testing-all-projects",level:2},{value:"Caching",id:"caching",level:2},{value:"Target Dependencies (aka task pipelines)",id:"target-dependencies-aka-task-pipelines",level:2},{value:"Publishing",id:"publishing",level:2}],d={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/WgO5iG57jeQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",allowfullscreen:!0}),(0,r.kt)("p",null,"You can incrementally adopt Lerna for existing monorepos or create a new Lerna workspace by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx lerna init\n")),(0,r.kt)("p",null,"All Lerna functionality will work the same way regardless."),(0,r.kt)("p",null,"This tutorial will give you an introduction to Lerna's features. We will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lerna/getting-started-example"},"this repository"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To start the tutorial, clone the repo, check out the prelerna branch and follow along!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/lerna/getting-started-example.git\ncd getting-started-example\ngit checkout prelerna\nnpm install\n")),(0,r.kt)("p",null,"The repo contains three packages or projects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"header")," (a library of React components)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"footer")," (a library of React components)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remixapp")," (an app written using the Remix framework which depends on both ",(0,r.kt)("inlineCode",{parentName:"li"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"footer"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"packages/\n    header/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    footer/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    remixapp/\n        app/\n            ...\n        public/\n        package.json\n        remix.config.js\n\npackage.json\n")),(0,r.kt)("h2",{id:"adding-lerna"},"Adding Lerna"),(0,r.kt)("p",null,"To add Lerna run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx lerna@latest init\n")),(0,r.kt)("p",null,"This will generate ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna.json")," and will add ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna")," to the root ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "root",\n  "private": true,\n  "workspaces": ["packages/*"],\n  "devDependencies": {\n    "lerna": "5.1.6"\n  }\n}\n')),(0,r.kt)("p",null,"What makes Lerna 5.1+ so powerful is the task delegation and other features that come with its integration\nwith ",(0,r.kt)("a",{parentName:"p",href:"https://nx.dev"},"Nx"),"."),(0,r.kt)("h2",{id:"visualizing-workspace"},"Visualizing Workspace"),(0,r.kt)("p",null,"By having Nx installed alongside Lerna, you can use its capabilities to open an interactive visualization of the\nworkspace project graph."),(0,r.kt)("p",null,"To open the visualization, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx nx graph\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Project Graph",src:n(3749).Z,width:"3094",height:"1772"})),(0,r.kt)("h2",{id:"bootstrapping-projects"},"Bootstrapping Projects"),(0,r.kt)("p",null,"Bootstrapping is one of the three main key features of Lerna. It enables different projects in the same repository to\nimport each other without having to be published to a registry."),(0,r.kt)("p",null,"To see how it works, let for example inspect the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file of ",(0,r.kt)("inlineCode",{parentName:"p"},"remixapp"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "dependencies": {\n    "@remix-run/node": "^1.5.1",\n    "@remix-run/react": "^1.5.1",\n    "@remix-run/serve": "^1.5.1",\n    "react": "^17.0.2",\n    "react-dom": "^17.0.2",\n    "header": "*",\n    "footer": "*"\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'"header": "*"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"footer": "*"')," tell Lerna to link the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"footer")," as if they were\npublished to the registry. To do that, we need to run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx lerna bootstrap\n")),(0,r.kt)("p",null,"Now all the projects in the workspace can properly reference each other so that they can now be built."),(0,r.kt)("h2",{id:"building-all-projects"},"Building All Projects"),(0,r.kt)("p",null,"To build all projects, run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx lerna run build\n")),(0,r.kt)("p",null,"This builds the three projects in the right order: ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"footer")," will be built first (and in parallel),\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"remixapp")," will be built after. The order matters because the ",(0,r.kt)("inlineCode",{parentName:"p"},"remixapp")," uses the bundles from the compiled ",(0,r.kt)("inlineCode",{parentName:"p"},"header"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"footer"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \u2714  header:build (501ms)\n    \u2714  footer:build (503ms)\n    \u2714  remixapp:build (670ms)\n\n \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n >  Lerna (powered by Nx)   Successfully ran target build for 3 projects (1s)\n\n")),(0,r.kt)("h2",{id:"testing-all-projects"},"Testing All Projects"),(0,r.kt)("p",null,"Now, let's run the tests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx lerna run test\n")),(0,r.kt)("p",null,"You should see the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \u2714  footer:test (1s)\n    \u2714  header:test (1s)\n    \u2714  remixapp:test (236ms)\n\n \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n >  Lerna (powered by Nx)   Successfully ran target test for 3 projects (1s)\n")),(0,r.kt)("p",null,"Note, ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna")," will run the three ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," npm scripts in the topological order as well. Although we had to do it when\nbuilding, it isn't necessary for tests (and it also makes the command slower). We can change this behavior by configuring caching."),(0,r.kt)("h2",{id:"caching"},"Caching"),(0,r.kt)("p",null,"Running any command right now will execute all the tasks, every time, even when nothing changes. We can fix it by adding\na bit of configuration."),(0,r.kt)("p",null,"First, let's run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx lerna add-caching\n")),(0,r.kt)("p",null,"This will take you through a series of prompts to configure your caching:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? Which of the following scripts need to be run in deterministic/topoglogical order?\n (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)\n\u276f\u25c9 build\n \u25ef test\n \u25ef dev\n \u25ef start\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? Which of the following scripts are cacheable? (Produce the same output given the same input, e.g. build, test and lint usually are, serve and\nstart are not)\n (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)\n \u25c9 build\n\u276f\u25c9 test\n \u25ef dev\n \u25ef start\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'? Does the "build" script create any outputs? If not, leave blank, otherwise provide a path relative to a project root (e.g. dist, lib, build,\ncoverage)\n dist\n? Does the "test" script create any outputs? If not, leave blank, otherwise provide a path relative to a project root (e.g. dist, lib, build,\ncoverage)\n')),(0,r.kt)("p",null,"This generates an ",(0,r.kt)("inlineCode",{parentName:"p"},"nx.json")," at the root of your workspace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tasksRunnerOptions": {\n    "default": {\n      "runner": "nx/tasks-runners/default",\n      "options": {\n        "cacheableOperations": ["build", "test"]\n      }\n    }\n  },\n  "targetDefaults": {\n    "build": {\n      "dependsOn": ["^build"],\n      "outputs": ["{projectRoot}/dist"]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This configuration caches ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," tasks and forces ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," to run in topological order (but ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," will not). Also each project's ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," folder defaults to being cached as the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," output."),(0,r.kt)("p",null,"Now, let's run tests on the header project twice. The second time the operation will be instant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx lerna run test --scope=header\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> lerna run test --scope=header\n\n> header:test  [existing outputs match the cache, left as is]\n\n> header@0.1.0 test\n> jest\n\nPASS  src/Header.spec.tsx\n\u2713 renders header (12 ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        0.439 s, estimated 1 s\nRan all test suites.\n\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n>  Lerna (powered by Nx)   Successfully ran target test for project header (4ms)\n\n   Nx read the output from the cache instead of running the command for 1 out of 1 tasks.\n")),(0,r.kt)("p",null,"Lerna (powered by Nx) was able to recognize that the same command has already executed against the same relevant code\nand environment, so instead running it Lerna restored the necessary files and replayed the terminal output."),(0,r.kt)("p",null,"We have specified the default build output as the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," folder, which works for ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"footer"),". However, in the case of the Remix app we need to specify the output folder as ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," by adding the following section to ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/remixapp/package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nx": {\n    "targets": {\n      "build": {\n        "outputs": ["{projectRoot}/build", "{projectRoot}/public/build"]\n      }\n    }\n  }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'NOTE: "{projectRoot}" is a special syntax supported by the task-runner, which will be appropriately interpolated internally when the command runs. You should therefore not replace "{projectRoot}" with a fixed path as this makes your configuration less flexible.')),(0,r.kt)("p",null,"Caching not only restores the terminal output logs, but also artifacts that might have been produced."),(0,r.kt)("p",null,"Build all the projects, then remove the remix build folder and run the build command again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx lerna run build\nrm -rf packages/remixapp/public/build\n")),(0,r.kt)("p",null,"You will see all the files restored from cache and the command executing instantly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \u2714  header:build  [existing outputs match the cache, left as is]\n    \u2714  footer:build  [existing outputs match the cache, left as is]\n    \u2714  remixapp:build  [local cache]\n\n \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n >  Lerna (powered by Nx)   Successfully ran target build for 3 projects (19ms)\n\n    Nx read the output from the cache instead of running the command for 3 out of 3 tasks.\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lerna also supports ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/cache-tasks"},"distributed caching"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/distribute-tasks"},"config-free distributed task execution"),".")),(0,r.kt)("h2",{id:"target-dependencies-aka-task-pipelines"},"Target Dependencies (aka task pipelines)"),(0,r.kt)("p",null,"We have made good progress, but there is one problem left to be solved. The following configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"nx.json")," is incomplete:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "targetDefaults": {\n    "build": {\n      "dependsOn": ["^build"]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This ensures that ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," dependencies are run before any ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," command, but we also need to remember to build ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"footer")," before we run ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna run dev --scope=remixapp"),". We can fix that by defining dependencies between targets (also known as task pipelines) in the ",(0,r.kt)("inlineCode",{parentName:"p"},"nx.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "targetDefaults": {\n    "build": {\n      "dependsOn": [\n        "^build"\n      ]\n    },\n    "dev": {\n      "dependsOn": [\n        "^build"\n      ]\n    }\n  }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note, older versions of Nx used targetDependencies instead of targetDefaults. Both still work, but targetDefaults is\nrecommended.")),(0,r.kt)("p",null,"With this change:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npx lerna run build")," will run the build targets in the right order."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npx lerna run dev --scope=remixapp")," will run the build targets for ",(0,r.kt)("inlineCode",{parentName:"li"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"footer")," first and then run the dev\ntarget for ",(0,r.kt)("inlineCode",{parentName:"li"},"remixapp"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npx lerna run test")," will run all the three test targets in parallel.")),(0,r.kt)("p",null,"If you are wondering whether it is slow to run ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna run dev --scope=remixapp"),' given that you have to rebuild all the\ndependencies all the time, the answer is "no". The dependencies will be rebuilt only when they change. Otherwise,\ntheir dist folders will be kept as is.'),(0,r.kt)("h2",{id:"publishing"},"Publishing"),(0,r.kt)("p",null,"Finally, let's talk about the third key Lerna feature: publishing to npm. Lerna comes already with a ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," command\nbuilt-in. To publish our packages ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"footer"),", all we need to do is to run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx lerna publish --no-private\n")),(0,r.kt)("p",null,"This will"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"determine the current version of the packages"),(0,r.kt)("li",{parentName:"ul"},"detect which packages have changed since the last publishing & then update its version in ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," accordingly"),(0,r.kt)("li",{parentName:"ul"},"create a commit of the changed ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," files, tag the commit and push the tag & commit to the remote"),(0,r.kt)("li",{parentName:"ul"},"publish the packages to NPM")),(0,r.kt)("p",null,"Read more about the publishing and versioning\nprocess ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/version-and-publish"},"in the corresponding docs page"),"."))}u.isMDXComponent=!0},3749:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-graph-e2dd8d0350b7fe58f05fce104c7a6283.png"}}]);