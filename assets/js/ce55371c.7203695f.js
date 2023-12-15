"use strict";(self.webpackChunkapp_source_documentation=self.webpackChunkapp_source_documentation||[]).push([[5669],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2,sidebar_class_name:"nav-det-level"},i="Functionality",o={unversionedId:"AddOns-Other/Report-Pack-Australia/Functionality",id:"AddOns-Other/Report-Pack-Australia/Functionality",title:"Functionality",description:"Send Customer Payment Receipt",source:"@site/docs/AddOns-Other/08-Report-Pack-Australia/Functionality.md",sourceDirName:"AddOns-Other/08-Report-Pack-Australia",slug:"/AddOns-Other/Report-Pack-Australia/Functionality",permalink:"/AddOns-Other/Report-Pack-Australia/Functionality",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"nav-det-level"},sidebar:"tutorialSidebar",previous:{title:"Pricing",permalink:"/AddOns-Other/Report-Pack-Australia/Pricing"},next:{title:"Change Log",permalink:"/AddOns-Other/Report-Pack-Australia/Changelog"}},s={},u=[{value:"Send Customer Payment Receipt",id:"send-customer-payment-receipt",level:2},{value:"Copy Document Comment Lines",id:"copy-document-comment-lines",level:2},{value:"Trading Names",id:"trading-names",level:2},{value:"New Reports",id:"new-reports",level:2},{value:"Extended Reports",id:"extended-reports",level:2},{value:"Sales",id:"sales",level:3},{value:"Purchase",id:"purchase",level:3},{value:"Inventory",id:"inventory",level:3},{value:"Custom Report Layouts",id:"custom-report-layouts",level:2},{value:"Sales",id:"sales-1",level:3},{value:"Purchase",id:"purchase-1",level:3},{value:"Inventory",id:"inventory-1",level:3},{value:"Setup",id:"setup",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"functionality"},"Functionality"),(0,r.kt)("h2",{id:"send-customer-payment-receipt"},"Send Customer Payment Receipt"),(0,r.kt)("p",null,"A new action ",(0,r.kt)("strong",{parentName:"p"},"Send Customer Payment Receipt")," in ",(0,r.kt)("strong",{parentName:"p"},"Customer Ledger Entries")," allows sending configured Customer Payment Receipt. The process uses the standard email functionality with a custom email scenario."),(0,r.kt)("h2",{id:"copy-document-comment-lines"},"Copy Document Comment Lines"),(0,r.kt)("p",null,'Copy documents functionality for sales and purchase documents has been extended by the "Include Comments" option. If this option is active, the document is copied, including records in "Sales Comment Line" and "Purchase Comment Line".'),(0,r.kt)("h2",{id:"trading-names"},"Trading Names"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Trading Names")," allow to define of multiple names (and addresses) for the Company. These addresses can be selected on the Customer and Vendor card and are automatically transferred to newly created documents (where they can be changed or removed)."),(0,r.kt)("p",null,"If the supported document with the trading name is printed, the trading name identifications are printed instead of the company name. When the ",(0,r.kt)("strong",{parentName:"p"},"Trading Name")," is specified, all information from the ",(0,r.kt)("strong",{parentName:"p"},"General")," tab is used instead of information from the Company Information record. However, fields in the ",(0,r.kt)("strong",{parentName:"p"},"Communication")," tab are used only when they have a value; otherwise, the value from the company information is used."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:a(5318).Z,width:"1717",height:"699"})),(0,r.kt)("p",null,"The following reports support trading name functionality:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standard Purchase - Order"),(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Credit Memo"),(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Invoice"),(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Order Confirmation"),(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Quote"),(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Shipment"),(0,r.kt)("li",{parentName:"ul"},"Customer - Payment Receipt (Fusion5)"),(0,r.kt)("li",{parentName:"ul"},"Customer Statement (Fusion5)")),(0,r.kt)("h2",{id:"new-reports"},"New Reports"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Customer Statement (Fusion5), report 71697660"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Copy of 17110 "AU/NZ Statement"'),(0,r.kt)("li",{parentName:"ul"},"Restructured, refactored, and updated for Word layouts."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Customer - Payment Receipt (Fusion5), report 71697661"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Copy of receipt from GB/US localization"),(0,r.kt)("li",{parentName:"ul"},"Restructured, refactored, and updated specifically for Word layouts.")))),(0,r.kt)("h2",{id:"extended-reports"},"Extended Reports"),(0,r.kt)("p",null,"The following reports have custom fields and data items available, so even when our custom report layouts do not have all values you require, there is a chance the field is still available and you need only to update the custom layout!"),(0,r.kt)("h3",{id:"sales"},"Sales"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Quote"),(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Order Confirmation"),(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Invoice"),(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Shipment"),(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Credit Memo")),(0,r.kt)("h3",{id:"purchase"},"Purchase"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standard Purchase - Order"),(0,r.kt)("li",{parentName:"ul"},"Purchase - Return Shipment"),(0,r.kt)("li",{parentName:"ul"},"Remittance Advice - Entries")),(0,r.kt)("h3",{id:"inventory"},"Inventory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transfer Shipment")),(0,r.kt)("h2",{id:"custom-report-layouts"},"Custom Report Layouts"),(0,r.kt)("p",null,"The following reports have custom layout(s) specifically made for Australia."),(0,r.kt)("h3",{id:"sales-1"},"Sales"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Quote"),(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Order Confirmation"),(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Invoice"),(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Shipment"),(0,r.kt)("li",{parentName:"ul"},"Standard Sales - Credit Memo"),(0,r.kt)("li",{parentName:"ul"},"Customer Statement (Fusion5)"),(0,r.kt)("li",{parentName:"ul"},"Customer - Payment Receipt (Fusion5)")),(0,r.kt)("h3",{id:"purchase-1"},"Purchase"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standard Purchase - Order"),(0,r.kt)("li",{parentName:"ul"},"Purchase - Return Shipment"),(0,r.kt)("li",{parentName:"ul"},"Remittance Advice - Entries")),(0,r.kt)("h3",{id:"inventory-1"},"Inventory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transfer Shipment")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"New setup table ",(0,r.kt)("strong",{parentName:"p"},"Report Setup")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'Replace Report 17110 "AU/NZ Statement"'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If active, whenever the system calls report 17110, our report 71697660 is used instead (users can still use the OOTB actions)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'Replace Report 211 "Customer - Payment Receipt'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If active, whenever the system calls report 211, our report 71697661 is used instead (users can still use the OOTB actions)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Company Information")," has new fields"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Picture 2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allows to add an additional picture/logo to reports that have this field available")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Report Selection - Sales")," has a new option"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Customer - Payment Receipt"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allows to specify reports that should be printed when ",(0,r.kt)("strong",{parentName:"li"},"Send Customer Payment Receipt")," action is used in ",(0,r.kt)("strong",{parentName:"li"},"Customer Ledger Entries"),". The default report is ",(0,r.kt)("strong",{parentName:"li"},"211, Customer - Payment Receipt"),".")))))}m.isMDXComponent=!0},5318:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Trading-Names-205d44aa6b18e6663e2590f8942f3a06.png"}}]);