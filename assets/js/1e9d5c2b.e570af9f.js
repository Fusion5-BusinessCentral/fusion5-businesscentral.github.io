"use strict";(self.webpackChunkapp_source_documentation=self.webpackChunkapp_source_documentation||[]).push([[4036],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(h,i(i({ref:e},m),{},{components:a})):n.createElement(h,i({ref:e},m))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9980:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1,sidebar_class_name:"nav-det-level"},i="Functionality",l={unversionedId:"AddOns-IT-Support/Email-Attachments/Functionality",id:"AddOns-IT-Support/Email-Attachments/Functionality",title:"Functionality",description:"This extension allows you to attach document attachments to emails sent from Business Central automatically. Only marked attachments are attached to the email. To mark an attachment, go to Document Attachment Details (the page where you can attach attachments) and set Attach to Emails to Yes.",source:"@site/docs/AddOns-IT-Support/06-Email-Attachments/Functionality.md",sourceDirName:"AddOns-IT-Support/06-Email-Attachments",slug:"/AddOns-IT-Support/Email-Attachments/Functionality",permalink:"/AddOns-IT-Support/Email-Attachments/Functionality",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"nav-det-level"},sidebar:"tutorialSidebar",previous:{title:"Email Attachments",permalink:"/category/email-attachments"},next:{title:"Change Log",permalink:"/AddOns-IT-Support/Email-Attachments/Changelog"}},s={},c=[{value:"Setup",id:"setup",level:2}],m={toc:c},u="wrapper";function p(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"functionality"},"Functionality"),(0,r.kt)("p",null,"This extension allows you to attach document attachments to emails sent from Business Central automatically. Only marked attachments are attached to the email. To mark an attachment, go to ",(0,r.kt)("strong",{parentName:"p"},"Document Attachment Details")," (the page where you can attach attachments) and set ",(0,r.kt)("strong",{parentName:"p"},"Attach to Emails")," to Yes."),(0,r.kt)("p",null,"With this addon, you can also add attachments to Customer and Vendor Ledger Entries. It is also possible to automatically copy document attachments from unposted documents (sales and purchase) to customer and vendor ledger entries."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"New field in ",(0,r.kt)("strong",{parentName:"p"},"Sales & Receivables Setup")," (",(0,r.kt)("strong",{parentName:"p"},"Purchases & Payables Setup"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Copy Doc. Attachments to Customer Ledger Entries")," (",(0,r.kt)("strong",{parentName:"li"},"Copy Doc. Attachments to Vendor Ledger Entries"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specifies whether document attachments should be automatically copied to customer/vendor ledger entries when the source document is posted. "),(0,r.kt)("li",{parentName:"ul"},"The default value is false (= documents are copied to posted document only).")))),(0,r.kt)("p",null,"Two new fields in ",(0,r.kt)("strong",{parentName:"p"},"General Ledger Setup"),", tab ",(0,r.kt)("strong",{parentName:"p"},"Email Attachments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Max no. of Email Attachments"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specifies the maximal number of attachments that can be attached to any email. This limit is applied to attachments attached by this extension; attachments from other extensions or generated documents are not limited and do not count towards this limit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Action When Limit Reached"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specifies what should happen when the limit is reached",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(blank): no warning, no error"),(0,r.kt)("li",{parentName:"ul"},"warning: users are warned that there are more attachments. Not all attachments will be attached."),(0,r.kt)("li",{parentName:"ul"},"error: users won't be able to send any email if it contains more attachments")))))))}p.isMDXComponent=!0}}]);