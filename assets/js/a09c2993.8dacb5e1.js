"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[128],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"introduction",title:"Introduction",type:"explainer"},l="Introduction",u={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Lerna is the original monorepo tool for TypeScript/JavaScript. It has been around for many years and is used by tens of thousands of projects, including React, Jest and Babel.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",type:"explainer"},sidebar:"main",next:{title:"Getting Started",permalink:"/docs/getting-started"}},c={},p=[{value:"Why Lerna?",id:"why-lerna",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Lerna is the original ",(0,o.kt)("a",{parentName:"p",href:"https://monorepo.tools"},"monorepo tool")," for TypeScript/JavaScript. It has been around for many years and is used by tens of thousands of projects, including React, Jest and Babel."),(0,o.kt)("p",null,"It solves three of the biggest problems of JavaScript monorepos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lerna links different projects within the repo, so they can import each other without having to publish anything to NPM."),(0,o.kt)("li",{parentName:"ul"},"Lerna runs a command against any number of projects, and it does it in the most efficient way, in the right order, and with the possibility to distribute that on multiple machines."),(0,o.kt)("li",{parentName:"ul"},"Lerna manages your publishing process, from version management to publishing to NPM, and it provides a variety of options to make sure any workflow can be accommodated.")),(0,o.kt)("p",null,"Nrwl (the company behind the open source build system Nx) has taken over ",(0,o.kt)("a",{parentName:"p",href:"https://dev.to/nrwl/lerna-is-dead-long-live-lerna-3jal"},"stewardship of Lerna"),". ",(0,o.kt)("a",{parentName:"p",href:"https://nx.dev"},"Nx")," is a build system developed by ex-Googlers and utilizes many of the techniques used by internal Google tools. Lerna v5 is the first release under this new stewardship, updating outdated packages and starting to do some cleanup on the repository itself. Starting with v5.1+, Lerna comes with the new possibility to integrate Nx and defer a lot of the task scheduling work to it."),(0,o.kt)("h2",{id:"why-lerna"},"Why Lerna?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Super Fast!")," Lerna v5+ is fast, even faster than most comparable solutions out there (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/vsavkin/large-monorepo"},"see this benchmark")," to learn more). How? Under the hood, ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/i/status/1529493314621145090"},"Lerna v5+ has the ability to use Nx to run tasks"),". Learn more about ",(0,o.kt)("a",{parentName:"li",href:"/docs/features/run-tasks"},"running tasks here"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Computation Caching")," - Lerna knows when the task you are about to run has been executed in the past. Instead of running it, Lerna will restore the files and replay the terminal output instantly. Plus, this cache can be shared with your co-workers and CI. When using Lerna, your whole organization will never have to build or test the same thing twice. ",(0,o.kt)("a",{parentName:"li",href:"/docs/features/cache-tasks"},"Read more ","\xbb")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Configuration-Free Distributed Task Execution")," Lerna can distribute any command across multiple machines without any configuration, while preserving the dev ergonomics of running it on a single machine. In other words, scaling your monorepo with Lerna is as simple as enabling a boolean flag. See the examples of how enabling DTE can make you CI 20 times faster. ",(0,o.kt)("a",{parentName:"li",href:"/docs/features/distribute-tasks"},"Read more ","\xbb")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Beautiful Terminal Output")," Monorepos can have hundreds or thousands of projects. Printing everything on every command makes it hard to see what fails and why. Thankfully, Lerna does a much better job."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Powerful Graph Visualizer")," Lerna comes with a powerful interactive visualizer simplifying the understanding of your workspaces. ",(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started#visualizing-workspace"},"Read more ","\xbb")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Publishing to NPM")," Lerna is the ultimate tool for publishing multiple packages to npm. Whether the packages have independent versions or not, Lerna has you covered. ",(0,o.kt)("a",{parentName:"li",href:"/docs/features/version-and-publish"},"Read more ","\xbb")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Easy to Adopt")," Even with all these capabilities, Lerna is very easy to adopt. It requires close-to-zero configurations. ",(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started"},"Want to see how?"))))}h.isMDXComponent=!0}}]);