"use strict";(self.webpackChunkapp_source_documentation=self.webpackChunkapp_source_documentation||[]).push([[5125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>A});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,A=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(A,s(s({ref:t},c),{},{components:n})):i.createElement(A,s({ref:t},c))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2,sidebar_class_name:"nav-det-level"},s="Functionality",l={unversionedId:"AddOns-IT-Support/Licensing/Functionality",id:"AddOns-IT-Support/Licensing/Functionality",title:"Functionality",description:"There are two main pages in this extension, Licensable Extensions and Existing Licenses.",source:"@site/docs/AddOns-IT-Support/00-Licensing/Functionality.md",sourceDirName:"AddOns-IT-Support/00-Licensing",slug:"/AddOns-IT-Support/Licensing/Functionality",permalink:"/AddOns-IT-Support/Licensing/Functionality",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"nav-det-level"},sidebar:"tutorialSidebar",previous:{title:"Pricing",permalink:"/AddOns-IT-Support/Licensing/Pricing"},next:{title:"Change Log",permalink:"/AddOns-IT-Support/Licensing/Changelog"}},o={},u=[{value:"Licensable Fusion5 Extensions",id:"licensable-fusion5-extensions",level:3},{value:"Existing Fusion5 Licenses",id:"existing-fusion5-licenses",level:3},{value:"User Limits",id:"user-limits",level:3},{value:"For developers",id:"for-developers",level:2},{value:"Codeunit 71697595 &quot;FS5 Licensing Management&quot;",id:"codeunit-71697595-fs5-licensing-management",level:3},{value:"External Publishers",id:"external-publishers",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functionality"},"Functionality"),(0,a.kt)("p",null,"There are two main pages in this extension, ",(0,a.kt)("strong",{parentName:"p"},"Licensable Extensions")," and ",(0,a.kt)("strong",{parentName:"p"},"Existing Licenses"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(3155).Z,width:"637",height:"125"})),(0,a.kt)("h3",{id:"licensable-fusion5-extensions"},"Licensable Fusion5 Extensions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This page contains ",(0,a.kt)("strong",{parentName:"li"},"all installed extensions")," that support licensing using our extension. Extensions are added to this list when they are installed."),(0,a.kt)("li",{parentName:"ul"},"For all installed extensions that support this licensing module, users can see information",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Licensed Permanently"),": If the extension is licensed permanently, there are no conditions for the extension usage and the extension is never verified against the remote licensing server. This field is used for installations where the extension was bought in a non-subscription way."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parent Extension Name"),": Some of the extensions could be licensed as a complex solution. In that case, the child extension shared the licensing conditions and requirements of the parent extension."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Requires License for Sandbox"),": By default, extensions do not require any license for the Sandbox environment. If the extension uses the licenses even for the Sandbox environment, this field is set to Yes."))),(0,a.kt)("li",{parentName:"ul"},"From this page, users can open the following pages",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"License Levels"),": Each extension could have multiple licensing levels, for example, for a different number of users, companies or with custom conditions. Levels are defined by the licensed extension."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Existing Licenses"),": Overview of all existing licenses in the system for the selected extension."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Documentation")," and ",(0,a.kt)("strong",{parentName:"li"},"Support")," are external links; URL addresses are defined by licensed extensions."))),(0,a.kt)("li",{parentName:"ul"},"Users could also request a quote for selected extensions/extension levels using the action ",(0,a.kt)("strong",{parentName:"li"},"Get a Quote"),". The body is predefined automatically with all important details and can be edited by the users. Before the email can be sent, users have to select the extension level(s) that they are interested in.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(5925).Z,width:"782",height:"711"})),(0,a.kt)("h3",{id:"existing-fusion5-licenses"},"Existing Fusion5 Licenses"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Existing licenses show the list of all existing and applied licenses. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(892).Z,width:"802",height:"169"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From this page, users can also add a new license key using the action ",(0,a.kt)("strong",{parentName:"li"},"Add New License Key"),". "),(0,a.kt)("li",{parentName:"ul"},"Users can also ",(0,a.kt)("strong",{parentName:"li"},"Refresh License")," to update the local license details, for example when the license key is upgraded to higher license level."),(0,a.kt)("li",{parentName:"ul"},"The license keys, as well as all other license tables, are shared across all environment companies. This means that if the license allows only a specified number of companies, the client must manage the total number of existing companies and remove the companies that are over this limit or extend the license limits.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(9598).Z,width:"764",height:"410"})),(0,a.kt)("h3",{id:"user-limits"},"User Limits"),(0,a.kt)("p",null,"If the extension limits number of the users that may use the extension, only users with plans different from the plans below are considered."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Global Admin"),(0,a.kt)("li",{parentName:"ul"},"D365 Admin"),(0,a.kt)("li",{parentName:"ul"},"D365 Admin Partner"),(0,a.kt)("li",{parentName:"ul"},"Delegated Admin"),(0,a.kt)("li",{parentName:"ul"},"Helpdesk"),(0,a.kt)("li",{parentName:"ul"},"Accountant Hub"),(0,a.kt)("li",{parentName:"ul"},"Microsoft 365")),(0,a.kt)("h2",{id:"for-developers"},"For developers"),(0,a.kt)("p",null,"To add this extension to a new add-on, use the ",(0,a.kt)("strong",{parentName:"p"},'codeunit 71697595 "FS5 Licensing Management"'),"."),(0,a.kt)("h3",{id:"codeunit-71697595-fs5-licensing-management"},'Codeunit 71697595 "FS5 Licensing Management"'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There are a lot of procedures (and overloaded procedures) that allow configuring everything directly from this extension.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To add a new extension, do\n1) ",(0,a.kt)("strong",{parentName:"p"},"RegisterExtension()")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Only allowed publishers are able to register extensions."),(0,a.kt)("li",{parentName:"ul"},"Publishers must be listed in this extension; the same publisher (Fusion5) as the publisher of the licensing module is always allowed.\n1) ",(0,a.kt)("strong",{parentName:"li"},"AddExtensionLicenseLevel()")," for all levels extension needs\n1) ",(0,a.kt)("strong",{parentName:"li"},"SetRequireLicenseForSandbox()")," if the extension must be licensed even for the Sandbox environments. "),(0,a.kt)("li",{parentName:"ul"},"By default, extensions do not need to be licensed for Sandbox environments.\n1) ",(0,a.kt)("strong",{parentName:"li"},"SetLicenseLevelCompany()")," or User limits for all created levels\n1) ",(0,a.kt)("strong",{parentName:"li"},"SetLicenseLevelSpecialLimits()")),(0,a.kt)("li",{parentName:"ul"},"To define your licensing conditions, extend the ",(0,a.kt)("strong",{parentName:"li"},'Enum 71697590 "FS5 Special License Cond."')," and implement the interface ",(0,a.kt)("strong",{parentName:"li"},'"FS5 ISpecial License Cond."'),"\n1) ",(0,a.kt)("strong",{parentName:"li"},"AddPermanentLicense()"),"\n1) ",(0,a.kt)("strong",{parentName:"li"},"AddChildExtensionCreateBundle()"))),(0,a.kt)("p",{parentName:"li"},"Optionally, use ",(0,a.kt)("strong",{parentName:"p"},"RegisterNewDemoLicense()")," if you want to use the demo license key. Otherwise, the extension can't be used in the production environment and can be used without any conditions/limits in every Sandbox environment."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(3172).Z,width:"457",height:"248"})),(0,a.kt)("h3",{id:"external-publishers"},"External Publishers"),(0,a.kt)("p",null,"This extension allows other companies to license their solutions. To be able to use the extension, they must be listed ",(0,a.kt)("strong",{parentName:"p"},"CheckPublisher()")," procedure; otherwise, they are not allowed to register an extension."),(0,a.kt)("p",null,'External publisher must\n1) Be allowed by us to register an extension (see previous part)\n1) Extend the "',(0,a.kt)("strong",{parentName:"p"},"FS5 Verification Service"),'" enum and implement the associated interface "',(0,a.kt)("strong",{parentName:"p"},"FS5 Verification Service"),'"'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The procedure must return a record in temporary ",(0,a.kt)("strong",{parentName:"li"},'table 71697596 "FS5 Remote License"')," with information about the license. If the license is not valid, the procedure must return false or raise a custom error.\n2) Subscribe to ",(0,a.kt)("strong",{parentName:"li"},"OnRegisterVerificationServices()")," in ",(0,a.kt)("strong",{parentName:"li"},'Codeunit 71697599 "FS5 Verification Service Mgt."'),"\n3) Call the ",(0,a.kt)("strong",{parentName:"li"},"RegisterVerificationService()")," procedure in ",(0,a.kt)("strong",{parentName:"li"},'Codeunit 71697599 "FS5 Verification Service Mgt."')," from the subscribe")))}p.isMDXComponent=!0},9598:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Add-New-License_Key-e8d8c9dfeb5ae18be9d2b30c5a5c456a.png"},3172:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Available-Procedures-0050c9bc342bfc1b41f3652ff20a41bf.png"},892:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Existing-Licenses-a15a1e5577bd9853234c4f4b04c3e322.png"},5925:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Get-A-Quote-0dd68dd4e3f8c896011b8ae707ca5a1a.png"},3155:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);