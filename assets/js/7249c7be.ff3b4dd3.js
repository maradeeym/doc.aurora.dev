"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[4617],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),c=n,b=p["".concat(l,".").concat(c)]||p[c]||h[c]||o;return r?a.createElement(b,i(i({ref:t},d),{},{components:r})):a.createElement(b,i({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(1163),n=(r(9496),r(9613));const o={sidebar_label:"Troubleshooting",title:"Troubleshooting"},i=void 0,s={unversionedId:"bridge/troubleshooting",id:"bridge/troubleshooting",title:"Troubleshooting",description:"How bridging tokens between Ethereum and Aurora work?",source:"@site/docs/bridge/troubleshooting.md",sourceDirName:"bridge",slug:"/bridge/troubleshooting",permalink:"/bridge/troubleshooting",draft:!1,editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/bridge/troubleshooting.md",tags:[],version:"current",frontMatter:{sidebar_label:"Troubleshooting",title:"Troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"Advanced features",permalink:"/bridge/advanced"},next:{title:"Introduction",permalink:"/launch-chain/introduction"}},l={},u=[{value:"How bridging tokens between Ethereum and Aurora work?",id:"how-bridging-tokens-between-ethereum-and-aurora-work",level:3},{value:"Which tokens are supported with Rainbow Bridge?",id:"which-tokens-are-supported-with-rainbow-bridge",level:3},{value:"How to add my assets to the bridge?",id:"how-to-add-my-assets-to-the-bridge",level:3},{value:"How long will transfers take?",id:"how-long-will-transfers-take",level:3},{value:"Am I able to initiate multiple transfers via Rainbow Bridge in parallel?",id:"am-i-able-to-initiate-multiple-transfers-via-rainbow-bridge-in-parallel",level:3},{value:"I have a few more questions. Where can I get help?",id:"i-have-a-few-more-questions-where-can-i-get-help",level:3}],d={toc:u},p="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"how-bridging-tokens-between-ethereum-and-aurora-work"},"How bridging tokens between Ethereum and Aurora work?"),(0,n.kt)("p",null,"You need to select the direction of transfer, the token you want to transfer, and the amount.\nYour address on Aurora will be the same as your Ethereum address. The Rainbow Bridge could be used with MetaMask, Aurora Pass or any other WalletConnect compatible wallet.\nYou can add Aurora as an network to MetaMask ",(0,n.kt)("a",{parentName:"p",href:"https://aurora.dev/start"},"here"),"."),(0,n.kt)("h3",{id:"which-tokens-are-supported-with-rainbow-bridge"},"Which tokens are supported with Rainbow Bridge?"),(0,n.kt)("p",null,"You can find the list of supported tokens ",(0,n.kt)("a",{parentName:"p",href:"https://aurora.dev/tokens"},"here"),"."),(0,n.kt)("h3",{id:"how-to-add-my-assets-to-the-bridge"},"How to add my assets to the bridge?"),(0,n.kt)("p",null,"We have this ",(0,n.kt)("a",{parentName:"p",href:"https://rainbowbridge.app/deploy"},"UI interface")," to deploy and view bridge tokens.\nJust follow the steps there to deploy your own token from Near or Ethereum chains.\nAfter that, please provide the metadata by creating a PR in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aurora-is-near/bridge-assets"},"bridge-assets"),". Then, when our team will merge it - your token will be ready to be bridged."),(0,n.kt)("h3",{id:"how-long-will-transfers-take"},"How long will transfers take?"),(0,n.kt)("p",null,"To ensure security, transfers to Aurora take about 20 minutes, and transfers back to Ethereum take about a 4-8 hours.\nIn the case of using the Fast Bridge option, transfers to Ethereum take only a few minutes."),(0,n.kt)("h3",{id:"am-i-able-to-initiate-multiple-transfers-via-rainbow-bridge-in-parallel"},"Am I able to initiate multiple transfers via Rainbow Bridge in parallel?"),(0,n.kt)("p",null,"Yes! Since confirmation of transfer can take a while, you\u2019ll be able to initiate any number of concurrent transfers."),(0,n.kt)("h3",{id:"i-have-a-few-more-questions-where-can-i-get-help"},"I have a few more questions. Where can I get help?"),(0,n.kt)("p",null,"For support and help with any questions, don't hesitate to reach out on Telegram channels: ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/auroraisnear"},"official channel"),", ",(0,n.kt)("a",{parentName:"p",href:"https://discord.aurora.dev/"},"support in Discord"),", ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/auroraisneardev"},"development channel"),"."))}h.isMDXComponent=!0}}]);