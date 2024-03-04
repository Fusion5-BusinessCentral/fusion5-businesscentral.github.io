"use strict";(self.webpackChunkapp_source_documentation=self.webpackChunkapp_source_documentation||[]).push([[6371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3,sidebar_class_name:"nav-det-level"},l="Change Log",o={unversionedId:"AddOns-IT-Support/Licensing/Changelog",id:"AddOns-IT-Support/Licensing/Changelog",title:"Change Log",description:"All notable changes to this project will be documented in this file.",source:"@site/docs/AddOns-IT-Support/00-Licensing/Changelog.md",sourceDirName:"AddOns-IT-Support/00-Licensing",slug:"/AddOns-IT-Support/Licensing/Changelog",permalink:"/AddOns-IT-Support/Licensing/Changelog",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"nav-det-level"},sidebar:"tutorialSidebar",previous:{title:"Functionality",permalink:"/AddOns-IT-Support/Licensing/Functionality"},next:{title:"Email Attachments",permalink:"/category/email-attachments"}},s={},u=[{value:"2.3.0 - 2024-03-04",id:"230---2024-03-04",level:2},{value:"2.2.0 - 2023-12-07",id:"220---2023-12-07",level:2},{value:"2.1.0 - 2023-11-20",id:"210---2023-11-20",level:2},{value:"2.0.0 - 2023-11-11",id:"200---2023-11-11",level:2},{value:"1.12.0 - 2023-10-27",id:"1120---2023-10-27",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"change-log"},"Change Log"),(0,i.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,i.kt)("h2",{id:"230---2024-03-04"},"[2.3.0]"," - 2024-03-04"),(0,i.kt)("p",null,"Available version: 23.0+"),(0,i.kt)("p",null,"Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'New action "Refresh License" in "Existing Licenses" to force update BC license details (for example to force update the license after it was upgraded to higher license level).'),(0,i.kt)("li",{parentName:"ul"},"Change how the active users are counted",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For OnPrem, all users with State = Enabled are considered as active."),(0,i.kt)("li",{parentName:"ul"},"For Cloud, only users with specific plans are considered as active. If the user has only one or more of the following plans, it is not counted towards the limit.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Global Admin"),(0,i.kt)("li",{parentName:"ul"},"D365 Admin"),(0,i.kt)("li",{parentName:"ul"},"D365 Admin Partner"),(0,i.kt)("li",{parentName:"ul"},"Delegated Admin"),(0,i.kt)("li",{parentName:"ul"},"Helpdesk"),(0,i.kt)("li",{parentName:"ul"},"Accountant Hub"),(0,i.kt)("li",{parentName:"ul"},"Microsoft 365"))))),(0,i.kt)("li",{parentName:"ul"},"SecretText uptake preparation for v24 release.")),(0,i.kt)("h2",{id:"220---2023-12-07"},"[2.2.0]"," - 2023-12-07"),(0,i.kt)("p",null,"Available version: 23.0+"),(0,i.kt)("p",null,"Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New overload for RegisterExtension() procedure to allow registration without any supporting documents (email, documentation, licensing guidelines)."),(0,i.kt)("li",{parentName:"ul"},"Email is no longer mandatory to register new extensions."),(0,i.kt)("li",{parentName:"ul"},"New procedure UpdateExtensionRegistration(). Use this procedure to change registered email, documentation URL or licensing guidelines URL.")),(0,i.kt)("h2",{id:"210---2023-11-20"},"[2.1.0]"," - 2023-11-20"),(0,i.kt)("p",null,"Available version: 23.0+"),(0,i.kt)("p",null,"Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New procedure UnregisterExtension() in LicensingManagement codeunit. Use this procedure to remove registration of the extension from the licensing module.")),(0,i.kt)("h2",{id:"200---2023-11-11"},"[2.0.0]"," - 2023-11-11"),(0,i.kt)("p",null,"Available version: 23.0+"),(0,i.kt)("p",null,"Internal release for BC 2023 wave 2 (namespaces, minor refactoring)"),(0,i.kt)("h2",{id:"1120---2023-10-27"},"[1.12.0]"," - 2023-10-27"),(0,i.kt)("p",null,"Available version: 22.0+"),(0,i.kt)("p",null,"First App-Source version"))}d.isMDXComponent=!0}}]);