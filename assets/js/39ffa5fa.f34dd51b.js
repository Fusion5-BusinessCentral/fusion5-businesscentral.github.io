"use strict";(self.webpackChunkapp_source_documentation=self.webpackChunkapp_source_documentation||[]).push([[4384],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2,sidebar_class_name:"nav-det-level"},l="Functionality",i={unversionedId:"AddOns-Other/Power-Automate-Pack/Functionality",id:"AddOns-Other/Power-Automate-Pack/Functionality",title:"Functionality",description:"!!! This AddOn is no longer maintained. Use our Pack for Power Automate and standalone workflow addons instead!!!",source:"@site/docs/AddOns-Other/07-Power-Automate-Pack/Functionality.md",sourceDirName:"AddOns-Other/07-Power-Automate-Pack",slug:"/AddOns-Other/Power-Automate-Pack/Functionality",permalink:"/AddOns-Other/Power-Automate-Pack/Functionality",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"nav-det-level"},sidebar:"tutorialSidebar",previous:{title:"Pricing",permalink:"/AddOns-Other/Power-Automate-Pack/Pricing"},next:{title:"Change Log",permalink:"/AddOns-Other/Power-Automate-Pack/Changelog"}},s={},p=[{value:"How to use",id:"how-to-use",level:2},{value:"Vendor Bank Account Approval",id:"vendor-bank-account-approval",level:3},{value:"Setup",id:"setup",level:2},{value:"Power Automate",id:"power-automate",level:2},{value:"Available API Pages",id:"available-api-pages",level:2},{value:"System API",id:"system-api",level:3},{value:"Processing API",id:"processing-api",level:3},{value:"Available External Business Events for Power Automate",id:"available-external-business-events-for-power-automate",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"functionality"},"Functionality"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"!!! This AddOn is no longer maintained. Use our ",(0,r.kt)("a",{parentName:"strong",href:"/AddOns-Power-Automate/Pack-for-Power-Automate/Functionality"},"Pack for Power Automate")," and standalone workflow addons instead!!!")),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("h3",{id:"vendor-bank-account-approval"},"Vendor Bank Account Approval"),(0,r.kt)("p",null,"Must be enabled in ",(0,r.kt)("strong",{parentName:"p"},"Power Automate Management"),". "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:a(3860).Z,width:"1021",height:"502"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New fields ",(0,r.kt)("strong",{parentName:"li"},"Approval Status")," added to ",(0,r.kt)("strong",{parentName:"li"},"Vendor Bank Accounts"),". If empty, the record is not approved nor sent for approval. Available statuses: ",(0,r.kt)("strong",{parentName:"li"},"Approval Required"),", ",(0,r.kt)("strong",{parentName:"li"},"Pending Approval"),", ",(0,r.kt)("strong",{parentName:"li"},"Approved"),", ",(0,r.kt)("strong",{parentName:"li"},"Rejected"),"."),(0,r.kt)("li",{parentName:"ul"},"New action ",(0,r.kt)("strong",{parentName:"li"},"Send Approval Request")," to ",(0,r.kt)("strong",{parentName:"li"},"Vendor Bank Accounts")," that emits ",(0,r.kt)("strong",{parentName:"li"},"Vendor Bank Account Approval Requested")," business event that can be consumed from Power Automate. The system also shows a notification on the vendor's bank account card when the account is not approved or the approval is already requested."),(0,r.kt)("li",{parentName:"ul"},"Whenever any of the following fields is changed, the ",(0,r.kt)("strong",{parentName:"li"},"Approval Status")," is set to the blank value, and the record must be re-approved.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bank Account No.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bank Branch No.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EFT BSB No.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SWIFT Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IBAN")))),(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("strong",{parentName:"li"},"Approval Status")," is reset on any of ",(0,r.kt)("strong",{parentName:"li"},"Vendor Bank Account")," or a new account is created, the corresponding ",(0,r.kt)("strong",{parentName:"li"},"Vendor")," is blocked (",(0,r.kt)("strong",{parentName:"li"},"Blocked = Payments"),")."),(0,r.kt)("li",{parentName:"ul"},"Once all ",(0,r.kt)("strong",{parentName:"li"},"Vendor Bank Accounts")," for the vendor are approved, the field is automatically set to ",(0,r.kt)("strong",{parentName:"li"},"Blocked = ''"),". If there is at least one bank account that is not approved yet, the ",(0,r.kt)("strong",{parentName:"li"},"Vendor")," can not be unblocked."),(0,r.kt)("li",{parentName:"ul"},"If the ",(0,r.kt)("strong",{parentName:"li"},"Vendor Bank Account")," is deleted, the system will check if there are other bank accounts waiting for approval. If there are no other accounts, the ",(0,r.kt)("strong",{parentName:"li"},"Vendor")," will be automatically unblocked.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"New configuration table ",(0,r.kt)("strong",{parentName:"p"},"Power Automate Management")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contains all existing flows and allows to enable/disable them. When the flow is enabled, there could be changes to standard processes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Existing flows"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Vendor Bank Account Approval"),"\nWhen enabled, the system will check whether there are any ",(0,r.kt)("strong",{parentName:"p"},"Vendor Bank Accounts"),". If there is at least one bank account, confirm message (see the picture below) is shown. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If confirmed, all ",(0,r.kt)("strong",{parentName:"li"},"Vendor Bank Accounts")," will be set as ",(0,r.kt)("strong",{parentName:"li"},"Approved"),". "),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("strong",{parentName:"li"},"No")," is selected, the system will check all existing accounts, and if the bank account is not approved, it will block the corresponding ",(0,r.kt)("strong",{parentName:"li"},"Vendor"))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image.png",src:a(3298).Z,width:"1098",height:"604"})))))),(0,r.kt)("p",null,"New log table ",(0,r.kt)("strong",{parentName:"p"},"Power Automate Log Entries")," that contains all raised events or received signals from our Fusion5 flows. If the Power Automate flow provided any feedback or comments, these comments are visible in this log table."),(0,r.kt)("p",null,"There are also actions to open the source record from the log entry table as well as the associated flow run in Power Automate."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:a(1838).Z,width:"1696",height:"276"})),(0,r.kt)("p",null,"New configuration table ",(0,r.kt)("strong",{parentName:"p"},"Power Automate Approver Groups")," with a subpage ",(0,r.kt)("strong",{parentName:"p"},"Power Automate Approvers"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allows to define approver groups (multiple for one workflow type). For each group, users can link approver user accounts (using the action ",(0,r.kt)("strong",{parentName:"li"},"Approvers"),") or specify email accounts for approvers who do not have an account in Business Central."),(0,r.kt)("li",{parentName:"ul"},"Multiple approver groups allow using of different approvers in Power Automate.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:a(775).Z,width:"943",height:"253"}),"\n",(0,r.kt)("img",{alt:"image.png",src:a(5117).Z,width:"948",height:"266"})),(0,r.kt)("h2",{id:"power-automate"},"Power Automate"),(0,r.kt)("p",null,"To configure the Power Automate flow, open ",(0,r.kt)("a",{parentName:"p",href:"https://make.powerautomate.com/"},"https://make.powerautomate.com/")," with the tenant account with the BC license assigned (not our delegated admin account). The BC license is needed to be able to use Premium BC connectors without additional licenses."),(0,r.kt)("p",null,"In Power Automate, go to ",(0,r.kt)("strong",{parentName:"p"},"My Flows")," -> ",(0,r.kt)("strong",{parentName:"p"},"New Flow")," -> ",(0,r.kt)("strong",{parentName:"p"},"Automated Cloud Flow")," or import the existing flow."),(0,r.kt)("h2",{id:"available-api-pages"},"Available API Pages"),(0,r.kt)("p",null,"All API pages have APIPublisher = 'fusion5', APIGroup = 'powerAutomate';"),(0,r.kt)("h3",{id:"system-api"},"System API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Power Automate Approvers")," (View Approvers)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"APIVersion = 'v1.0';"),(0,r.kt)("li",{parentName:"ul"},"EntityName = 'powerAutomateApprover';"),(0,r.kt)("li",{parentName:"ul"},"EntitySetName = 'powerAutomateApprovers';"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Power Automate Log Entries")," (View and Create new log entries)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"APIVersion = 'v1.0';"),(0,r.kt)("li",{parentName:"ul"},"EntityName = 'powerAutomateLogEntry';"),(0,r.kt)("li",{parentName:"ul"},"EntitySetName = 'powerAutomateLogEntries';"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Users")," (View existing Users)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"APIVersion = 'v1.0';"),(0,r.kt)("li",{parentName:"ul"},"EntityName = 'user';"),(0,r.kt)("li",{parentName:"ul"},"EntitySetName = 'users';")))),(0,r.kt)("h3",{id:"processing-api"},"Processing API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Vendor Bank Accounts")," (View existing Vendor Bank Accounts)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"APIVersion = 'v1.0';"),(0,r.kt)("li",{parentName:"ul"},"EntityName = 'vendorBankAccount';"),(0,r.kt)("li",{parentName:"ul"},"EntitySetName = 'vendorBankAccounts';")))),(0,r.kt)("h2",{id:"available-external-business-events-for-power-automate"},"Available External Business Events for Power Automate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vendors (Fusion5)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Vendor Bank Account Approval Requested"),", Triggered when a vendor bank account approval is requested")))))}m.isMDXComponent=!0},775:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Approver-Groups-c89350456f02b08c1faa36010401cea5.png"},5117:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Approvers-d55df3d69320eec9c990e68dc104d816.png"},3860:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Enable-Flow-951ceba91a84c74dc61b92f5b84c40e4.png"},1838:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Power-Automate-Log-Entries-9c294cbb975861c959722041b1270a78.png"},3298:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Vendor-Bank-Account-Approval-a1adfd6125bd50d4230d0adcafc20d11.png"}}]);