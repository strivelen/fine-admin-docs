"use strict";(self.webpackChunkfine_admin_docs=self.webpackChunkfine_admin_docs||[]).push([[671],{9874:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(3106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(6765),a=(r(3106),r(9874));const i={sidebar_position:1},o="\u4ecb\u7ecd",l={unversionedId:"intro",id:"intro",title:"\u4ecb\u7ecd",description:"Fine Admin \u81f4\u529b\u4e8e\u6784\u5efa\u4e00\u4e2a\u80fd\u591f\u5feb\u901f\u5f00\u53d1\u4e14\u6269\u5c55\u6027\u5f3a\u7684\u901a\u7528\u4e2d\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u6a21\u677f\u3002\u5982\u679c\u6b64\u6a21\u677f\u80fd\u5e2e\u52a9\u5230\u4f60\uff0c\u8bf7\u70b9\u51fb Star\uff0c\u8c22\u8c22!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/strivelen/fine-admin-docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/docs/quick-start"}},p={},s=[{value:"\u2728 \u7279\u6027",id:"-\u7279\u6027",level:2},{value:"\u2753 \u6211\u6709\u7591\u95ee",id:"-\u6211\u6709\u7591\u95ee",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/strivelen/fine-admin"},"Fine Admin")," \u81f4\u529b\u4e8e\u6784\u5efa\u4e00\u4e2a\u80fd\u591f\u5feb\u901f\u5f00\u53d1\u4e14\u6269\u5c55\u6027\u5f3a\u7684\u901a\u7528\u4e2d\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u6a21\u677f\u3002\u5982\u679c\u6b64\u6a21\u677f\u80fd\u5e2e\u52a9\u5230\u4f60\uff0c\u8bf7\u70b9\u51fb ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strivelen/fine-admin"},"Star"),"\uff0c\u8c22\u8c22!"),(0,a.kt)("h2",{id:"-\u7279\u6027"},"\u2728 \u7279\u6027"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd28 \u5b8c\u5584\u7684\u57fa\u7840\u8bbe\u65bd\u5efa\u8bbe\uff0c\u7701\u53bb\u5927\u91cf\u975e\u4e1a\u52a1\u7f16\u7801\u65f6\u95f4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf08 \u91c7\u7528 ",(0,a.kt)("a",{parentName:"li",href:"https://ant.design/index-cn"},"Ant Design")," \u4e3a\u60a8\u63d0\u4f9b\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u4ea7\u54c1\u7684\u4ea4\u4e92\u8bed\u8a00\u548c\u89c6\u89c9\u98ce\u683c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udce6 \u5f00\u7bb1\u5373\u7528\u7684\u9ad8\u8d28\u91cf\u5185\u7f6e\u7ec4\u4ef6\u5927\u5e45\u63d0\u5347\u5f00\u53d1\u6548\u7387\u3002"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udca5 \u57fa\u4e8e ",(0,a.kt)("a",{parentName:"li",href:"https://vitejs.dev/"},"Vite")," \u6784\u5efa\uff0c\u53ef",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"https://vitejs.dev/guide/why.html"},"\u5feb\u901f\u542f\u52a8\u5f00\u53d1")),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udee1 \u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"li"},"TypeScript")," \u5f00\u53d1\uff0c\u63d0\u4f9b\u5b8c\u6574\u7684\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc4d \u5f3a\u5927\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/"},"redux-toolkit")," \u8ba9\u60a8\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u5e94\u7528\u6240\u9700\u7684\u6838\u5fc3\u903b\u8f91\u3002"),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0f \u4f7f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"https://www.axios-http.cn/"},"axios")," \u642d\u914d ",(0,a.kt)("a",{parentName:"li",href:"https://ahooks.js.org/zh-CN/"},"ahooks")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"useRequest")," \u8fdb\u884c\u7f51\u7edc\u8bf7\u6c42\u3002"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udda5 \u652f\u6301\u540c\u65f6\u4f7f\u7528\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"Layout")," \u5e03\u5c40\uff0c\u4e14\u4efb\u610f\u6269\u5c55\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"Layout"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd0c \u540c\u65f6\u652f\u6301 ",(0,a.kt)("strong",{parentName:"li"},"\u7ea6\u5b9a\u5f0f\u8def\u7531")," \u548c ",(0,a.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u5316\u8def\u7531"),"\u3002")),(0,a.kt)("h2",{id:"-\u6211\u6709\u7591\u95ee"},"\u2753 \u6211\u6709\u7591\u95ee"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u95ee\u9898\uff0c\u6216\u8005\u5bf9\u6b64\u6a21\u677f\u6709\u6bd4\u8f83\u597d\u7684\u6539\u8fdb\u65b9\u6848\uff0c\u6b22\u8fce\u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strivelen/fine-admin/issues"},"issues")," \u3002"))}m.isMDXComponent=!0}}]);