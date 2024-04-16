"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[929],{9613:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>p});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,p=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(p,i(i({ref:t},h),{},{components:r})):a.createElement(p,i({ref:t},h))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(1163),n=(r(9496),r(9613));const o={sidebar_label:"FAQs",title:"Frequently Asked Questions"},i=void 0,s={unversionedId:"launch-chain/forwarder/troubleshooting",id:"launch-chain/forwarder/troubleshooting",title:"Frequently Asked Questions",description:"Why do I need the Forwarder?",source:"@site/docs/launch-chain/forwarder/troubleshooting.md",sourceDirName:"launch-chain/forwarder",slug:"/launch-chain/forwarder/troubleshooting",permalink:"/launch-chain/forwarder/troubleshooting",draft:!1,editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/launch-chain/forwarder/troubleshooting.md",tags:[],version:"current",frontMatter:{sidebar_label:"FAQs",title:"Frequently Asked Questions"},sidebar:"tutorialSidebar",previous:{title:"Technical Details",permalink:"/launch-chain/forwarder/tech-details"},next:{title:"Whitelists API",permalink:"/launch-chain/reference/whitelists-api"}},l={},c=[{value:"Why do I need the Forwarder?",id:"why-do-i-need-the-forwarder",level:3},{value:"Which Exchanges are supported?",id:"which-exchanges-are-supported",level:3},{value:"What assets can I transfer?",id:"what-assets-can-i-transfer",level:3},{value:"I have transferred an asset that is not on the list \u2013 can I return it?",id:"i-have-transferred-an-asset-that-is-not-on-the-list--can-i-return-it",level:3},{value:"How does the forwarder fulfill Aurora\u2019s vision?",id:"how-does-the-forwarder-fulfill-auroras-vision",level:3},{value:"How fast will I receive my tokens?",id:"how-fast-will-i-receive-my-tokens",level:3},{value:"Is this safe?",id:"is-this-safe",level:3}],h={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"why-do-i-need-the-forwarder"},"Why do I need the Forwarder?"),(0,n.kt)("p",null,"The Forwarder broadens the available options to onramp assets onto Aurora Mainnet and to any of the Aurora Chains in the future, even when a centralized exchange doesn\u2019t support Aurora\nas a withdrawal chain directly. This means you can withdraw assets from your Binance account to the Aurora Mainnet in one step, saving time and transaction costs."),(0,n.kt)("h3",{id:"which-exchanges-are-supported"},"Which Exchanges are supported?"),(0,n.kt)("p",null,"The Forwarder works with any exchange that enables withdrawals to Near blockchain. The most popular ones are Binance, ByBit, OKX, KuCoin, Gate.io, and Kraken."),(0,n.kt)("h3",{id:"what-assets-can-i-transfer"},"What assets can I transfer?"),(0,n.kt)("p",null,"The Forwarder has a curated list of tokens for which the transfer will be done automatically. These are USDC, USDT, and NEAR. We\u2019re going to support more tokens in the future."),(0,n.kt)("h3",{id:"i-have-transferred-an-asset-that-is-not-on-the-list--can-i-return-it"},"I have transferred an asset that is not on the list \u2013 can I return it?"),(0,n.kt)("p",null,"Yes, we can help you with that, just contact our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/WXfbGsSUbT"},"Support Team"),", and we will help you to get these tokens back."),(0,n.kt)("h3",{id:"how-does-the-forwarder-fulfill-auroras-vision"},"How does the forwarder fulfill Aurora\u2019s vision?"),(0,n.kt)("p",null,"The Forwarder is compatible with Aurora Mainnet and any Aurora Chain, which means that if a project is ",(0,n.kt)("a",{parentName:"p",href:"/launch-chain/introduction"},"deploying a dedicated Aurora Chain")," with Aurora Cloud,\nthe Forwarder will automatically support it, offering a way for users to withdraw funds from Binance and other major exchanges directly into their Aurora Chain from day one."),(0,n.kt)("h3",{id:"how-fast-will-i-receive-my-tokens"},"How fast will I receive my tokens?"),(0,n.kt)("p",null,"The Forwarder only requires one Near transaction to forward you the tokens once the Deposit Address receives them. This only takes a few seconds. But withdrawing from a centralised exchange\ncan incur other delays that are controlled by the exchanges themselves, even if on most exchanges, it usually only takes up to a few minutes."),(0,n.kt)("h3",{id:"is-this-safe"},"Is this safe?"),(0,n.kt)("p",null,"We take security seriously and implement all reasonable measures to ensure the service's safety, including code audits and best practices.\nHowever, one of the big risks of using this service is user error. Please make sure that you are using the deposit address from trusted sources."))}d.isMDXComponent=!0}}]);