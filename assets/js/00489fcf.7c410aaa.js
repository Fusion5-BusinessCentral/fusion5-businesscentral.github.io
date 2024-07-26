"use strict";(self.webpackChunkapp_source_documentation=self.webpackChunkapp_source_documentation||[]).push([[3178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,h=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2,sidebar_class_name:"nav-det-level"},l="Change Log",o={unversionedId:"AddOns-Finance/BPAY/Changelog",id:"AddOns-Finance/BPAY/Changelog",title:"Change Log",description:"All notable changes to this project will be documented in this file.",source:"@site/docs/AddOns-Finance/02-BPAY/Changelog.md",sourceDirName:"AddOns-Finance/02-BPAY",slug:"/AddOns-Finance/BPAY/Changelog",permalink:"/AddOns-Finance/BPAY/Changelog",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"nav-det-level"},sidebar:"tutorialSidebar",previous:{title:"Functionality",permalink:"/AddOns-Finance/BPAY/Functionality"},next:{title:"Pricing",permalink:"/AddOns-Finance/BPAY/Pricing"}},s={},c=[{value:"1.4.0 - 2024-06-28",id:"140---2024-06-28",level:2},{value:"Changes",id:"changes",level:3},{value:"Fixes",id:"fixes",level:3},{value:"1.3.0 - 2024-03-04",id:"130---2024-03-04",level:2},{value:"Fixes",id:"fixes-1",level:3},{value:"1.2.0 - 2023-11-15",id:"120---2023-11-15",level:2},{value:"1.1.0 - 2023-10-28",id:"110---2023-10-28",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"change-log"},"Change Log"),(0,i.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,i.kt)("h2",{id:"140---2024-06-28"},"[1.4.0]"," - 2024-06-28"),(0,i.kt)("p",null,"Available version: 23.0+"),(0,i.kt)("h3",{id:"changes"},"Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BPAY Field was added to the payment journal page (hidden by default)."),(0,i.kt)("li",{parentName:"ul"},"Purchase Document fields are now copied to archived document automatically."),(0,i.kt)("li",{parentName:"ul"},"Action to open ",(0,i.kt)("strong",{parentName:"li"},"Vendor BPAY Accounts")," is now available also from the ",(0,i.kt)("strong",{parentName:"li"},"Vendor List"),"."),(0,i.kt)("li",{parentName:"ul"},"BPAY fields are copied to posted credit note automatically, if they are stored in unposted purchase document (for example because the purchase credit was created by copying posted purchase invoice).")),(0,i.kt)("h3",{id:"fixes"},"Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix of the issue where the Bank Account fields were not editable when the card was reopened."),(0,i.kt)("li",{parentName:"ul"},"Customer Reference No. fields were changed from BigInteger to Code","[20]",". This changed fixed the problem with assigning references with 20 digits. Old field is hidden by default and will be removed in v25; the values were copied automatically from the old field to the new field."),(0,i.kt)("li",{parentName:"ul"},"Export buffer was redesign to offer better performance when processing >300 lines."),(0,i.kt)("li",{parentName:"ul"},"Fix of the permission issue if the user does not have old Microsoft permissions and only the new permissionsets are used. ")),(0,i.kt)("h2",{id:"130---2024-03-04"},"[1.3.0]"," - 2024-03-04"),(0,i.kt)("p",null,"Available version: 22.2+"),(0,i.kt)("h3",{id:"fixes-1"},"Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Show correct file name and bank account in BPAY register.")),(0,i.kt)("h2",{id:"120---2023-11-15"},"[1.2.0]"," - 2023-11-15"),(0,i.kt)("p",null,"Available version: 22.2+"),(0,i.kt)("p",null,"Internal release (licensing changes)"),(0,i.kt)("h2",{id:"110---2023-10-28"},"[1.1.0]"," - 2023-10-28"),(0,i.kt)("p",null,"Available version: 22.2+"),(0,i.kt)("p",null,"First App-Source version"))}p.isMDXComponent=!0}}]);