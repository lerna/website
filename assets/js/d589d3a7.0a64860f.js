"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={id:"getting-started",title:"Getting Started",type:"tutorial"},o="Getting Started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Lerna comes with a dedicated init command to assist you with both adding lerna to an existing repo, or creating one from scratch.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",type:"tutorial"},sidebar:"main",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Lerna and Nx",permalink:"/docs/lerna-and-nx"}},p={},s=[{value:"Starting from scratch",id:"starting-from-scratch",level:2},{value:"Adding lerna to an existing repo",id:"adding-lerna-to-an-existing-repo",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("iframe",{width:"690",height:"400",src:"https://www.youtube.com/embed/hRe-_GCMfYQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",allowfullscreen:!0}),(0,r.kt)("p",null,"Lerna comes with a dedicated ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," command to assist you with both adding lerna to an existing repo, or creating one from scratch."),(0,r.kt)("h2",{id:"starting-from-scratch"},"Starting from scratch"),(0,r.kt)("p",null,"In the simplest case, ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna init")," can be used to create a new repository in an empty directory. For that, we can run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Create an empty directory\nmkdir ./new-lerna-workspace\n# Change into the new directory\ncd ./new-lerna-workspace\n# Initialize lerna (using --dryRun to preview the changes)\nnpx lerna init --dryRun\n")),(0,r.kt)("p",null,"Note that we have passed the ",(0,r.kt)("inlineCode",{parentName:"p"},"--dryRun")," flag here, this allows us to see a preview of the changes that ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna init")," will make to our file system. This allows us to tweak the values of any other arguments we pass to ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna init")," (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"--exact")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--independent"),") without having to worry about undoing any mistakes."),(0,r.kt)("p",null,"Once we are happy with the changes it will make, we can simply repeat the ",(0,r.kt)("inlineCode",{parentName:"p"},"npx lerna init")," command but leave off the ",(0,r.kt)("inlineCode",{parentName:"p"},"--dryRun")," flag."),(0,r.kt)("p",null,"You will now be up and running with a working git repository, including npm workspaces, with lerna available to create, version and publish any packages you wish to develop."),(0,r.kt)("h2",{id:"adding-lerna-to-an-existing-repo"},"Adding lerna to an existing repo"),(0,r.kt)("p",null,"If you already have an existing repo, you can still add ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna")," to it using ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna init"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Lerna is not responsible for installing and linking your dependencies")," in your repo, your package manager is much better suited to that task."),(0,r.kt)("p",{parentName:"admonition"},"Instead, we strongly recommend configuring your package manager of choice to use its ",(0,r.kt)("inlineCode",{parentName:"p"},"workspaces")," feature:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm")," (",(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/using-npm/workspaces"},"https://docs.npmjs.com/cli/using-npm/workspaces"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn")," (",(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/features/workspaces"},"https://yarnpkg.com/features/workspaces"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm")," (",(0,r.kt)("a",{parentName:"li",href:"https://pnpm.io/workspaces"},"https://pnpm.io/workspaces"),")"))),(0,r.kt)("p",null,"When initializing lerna on an existing repo, it will need a way to know what packages it should operate on. If you are using your package manager's ",(0,r.kt)("inlineCode",{parentName:"p"},"workspaces")," feature (see note above), then lerna will default to using the ",(0,r.kt)("inlineCode",{parentName:"p"},"workspaces")," patterns you have already configured. No extra arguments are required."),(0,r.kt)("p",null,"Alternatively, you can manually specify a set of patterns to match against instead by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--packages")," flag for ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna init"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Passing a single pattern\nnpx lerna init --packages="packages/*"\n# Passing multiple patterns\nnpx lerna init --packages="foo/*" --packages="bar/*"\n')))}d.isMDXComponent=!0}}]);