"use strict";(self.webpackChunkapp_source_documentation=self.webpackChunkapp_source_documentation||[]).push([[8719],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>w});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(o),m=a,w=c["".concat(s,".").concat(m)]||c[m]||d[m]||n;return o?r.createElement(w,l(l({ref:t},u),{},{components:o})):r.createElement(w,l({ref:t},u))}));function w(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6690:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=o(7462),a=(o(7294),o(3905));const n={sidebar_position:1,sidebar_class_name:"nav-det-level"},l="Functionality",i={unversionedId:"AddOns-Power-Automate/Pack-for-Power-Automate/Functionality",id:"AddOns-Power-Automate/Pack-for-Power-Automate/Functionality",title:"Functionality",description:"Setup",source:"@site/docs/AddOns-Power-Automate/07-Pack-for-Power-Automate/Functionality.md",sourceDirName:"AddOns-Power-Automate/07-Pack-for-Power-Automate",slug:"/AddOns-Power-Automate/Pack-for-Power-Automate/Functionality",permalink:"/AddOns-Power-Automate/Pack-for-Power-Automate/Functionality",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"nav-det-level"},sidebar:"tutorialSidebar",previous:{title:"Pack for Power Automate",permalink:"/category/pack-for-power-automate"},next:{title:"Change Log",permalink:"/AddOns-Power-Automate/Pack-for-Power-Automate/Changelog"}},s={},p=[{value:"Setup",id:"setup",level:2},{value:"Record Limits",id:"record-limits",level:3},{value:"Tracked Fields",id:"tracked-fields",level:3},{value:"Additional Tracked Table",id:"additional-tracked-table",level:3},{value:"Flow Templates",id:"flow-templates",level:3},{value:"Record Approvers",id:"record-approvers",level:3},{value:"Flow Extended Setup",id:"flow-extended-setup",level:3},{value:"Log Entries",id:"log-entries",level:3},{value:"Posted Log Entries",id:"posted-log-entries",level:3},{value:"Power Automate Approver Groups",id:"power-automate-approver-groups",level:3},{value:"Power Automate",id:"power-automate",level:2},{value:"Available API Pages",id:"available-api-pages",level:2},{value:"System API",id:"system-api",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functionality"},"Functionality"),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"New configuration table ",(0,a.kt)("strong",{parentName:"p"},"Power Automate Flows")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Contains all existing flows and allows for enabling/disabling them. When the flow is enabled, there could be changes to standard processes."),(0,a.kt)("li",{parentName:"ul"},"Available flows depend on extensions you have installed in your environment. This pack contains no flow but is used as the basis for others.")),(0,a.kt)("p",null,"This page also contains two actions ",(0,a.kt)("strong",{parentName:"p"},"Tracked Fields")," and ",(0,a.kt)("strong",{parentName:"p"},"Record Limits")," and other configuration tables (see below). "),(0,a.kt)("h3",{id:"record-limits"},"Record Limits"),(0,a.kt)("p",null,"This configuration table limits records for which the flow should be active. If there is no record, the flow is active for all records; once there is at least one record, the flow will be run only for the records within the filter."),(0,a.kt)("p",null,"Example: If you have a flow for Vendor Bank Accounts, you can use this table to limit flows to run only for accounts with foreign currency."),(0,a.kt)("h3",{id:"tracked-fields"},"Tracked Fields"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tracked Fields")," specify fields that will trigger the workflow if they are changed. "),(0,a.kt)("p",null,"Example: If you have a flow for Vendor Bank Accounts, you can use this table to run the trigger only when the bank account number is changed. If only fields not listed in this table are changed, the workflow will not be run, and the record approval status will not change."),(0,a.kt)("h3",{id:"additional-tracked-table"},"Additional Tracked Table"),(0,a.kt)("p",null,"Specifies additional tables that can be tracked for approval records"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Options: ",(0,a.kt)("strong",{parentName:"li"},"Power Automate Flow Tracked Document Dimension")," (must be supported by the approval flow)")),(0,a.kt)("h3",{id:"flow-templates"},"Flow Templates"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Power Automate Flow Template")," page, accessible from ",(0,a.kt)("strong",{parentName:"p"},"Power Automate Flow"),", allows you to download ZIP files containing the predefined Power Automate solutions that can be imported to Power Automate."),(0,a.kt)("h3",{id:"record-approvers"},"Record Approvers"),(0,a.kt)("p",null,"This setup page has two modes (configurable in ",(0,a.kt)("strong",{parentName:"p"},"Power Automate Flow Setup"),"): Simple and Advanced."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The simple mode allows you to create record approver groups with a 1:1:1 ratio (one group\u2014one approver\u2014one record)."),(0,a.kt)("li",{parentName:"ul"},"The advanced option allows you to create record approver groups with a 1:N:N relation (one group\u2014multiple approvers\u2014multiple records).")),(0,a.kt)("h3",{id:"flow-extended-setup"},"Flow Extended Setup"),(0,a.kt)("p",null,"It contains an additional flow setup (if supported by the flow). Not available by default."),(0,a.kt)("h3",{id:"log-entries"},"Log Entries"),(0,a.kt)("p",null,"We have created a new log table, ",(0,a.kt)("strong",{parentName:"p"},"Power Automate Log Entries"),", which contains all raised events or received signals from our Fusion5 flows. If the Power Automate flow provides any feedback or comments, these comments are visible in this log table."),(0,a.kt)("p",null,"Actions are also available to open the source record from the log entry table and the associated flow run in Power Automate."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:o(6444).Z,width:"1696",height:"276"})),(0,a.kt)("h3",{id:"posted-log-entries"},"Posted Log Entries"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Posted Power Automate Log Entries")," page contains Power Automate Log entries for posted documents. Whether this table is used and how the records are created depends on the flow implementation (e.g., this table is not used for vendor bank account approval but for purchase line approval, where records are made once the document is posted). "),(0,a.kt)("h3",{id:"power-automate-approver-groups"},"Power Automate Approver Groups"),(0,a.kt)("p",null,"New configuration table ",(0,a.kt)("strong",{parentName:"p"},"Power Automate Approver Groups")," with a subpage ",(0,a.kt)("strong",{parentName:"p"},"Power Automate Approvers"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allows to define approver groups (multiple for one workflow type). For each group, users can link approver user accounts (using the action ",(0,a.kt)("strong",{parentName:"li"},"Approvers"),") or specify email accounts for approvers who do not have an account in Business Central."),(0,a.kt)("li",{parentName:"ul"},"Multiple approver groups allow using of different approvers in Power Automate.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:o(4180).Z,width:"943",height:"253"}),"\n",(0,a.kt)("img",{alt:"image.png",src:o(2106).Z,width:"948",height:"266"})),(0,a.kt)("h2",{id:"power-automate"},"Power Automate"),(0,a.kt)("p",null,"To configure the Power Automate flow, open ",(0,a.kt)("a",{parentName:"p",href:"https://make.powerautomate.com/"},"https://make.powerautomate.com/")," with the tenant account with the BC license assigned (not our delegated admin account). The BC license is needed to be able to use Premium BC connectors without additional licenses."),(0,a.kt)("p",null,"In Power Automate, go to ",(0,a.kt)("strong",{parentName:"p"},"My Flows")," -> ",(0,a.kt)("strong",{parentName:"p"},"New Flow")," -> ",(0,a.kt)("strong",{parentName:"p"},"Automated Cloud Flow")," or import the existing flow."),(0,a.kt)("h2",{id:"available-api-pages"},"Available API Pages"),(0,a.kt)("p",null,"All API pages have APIPublisher = 'fusion5', APIGroup = 'packForPowerAutomate';"),(0,a.kt)("h3",{id:"system-api"},"System API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Power Automate Approvers")," (View Approvers)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"APIVersion = 'v1.0';"),(0,a.kt)("li",{parentName:"ul"},"EntityName = 'powerAutomateApprover';"),(0,a.kt)("li",{parentName:"ul"},"EntitySetName = 'powerAutomateApprovers';"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Power Automate Log Entries")," (View and Create new log entries)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"APIVersion = 'v1.0';"),(0,a.kt)("li",{parentName:"ul"},"EntityName = 'powerAutomateLogEntry';"),(0,a.kt)("li",{parentName:"ul"},"EntitySetName = 'powerAutomateLogEntries';"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Users")," (View Existing Users)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"APIVersion = 'v1.0';"),(0,a.kt)("li",{parentName:"ul"},"EntityName = 'user';"),(0,a.kt)("li",{parentName:"ul"},"EntitySetName = 'users';"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Power Automate Record Approvers API")," (View configured record approvers)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"APIVersion = 'v1.0';"),(0,a.kt)("li",{parentName:"ul"},"EntityName = 'powerAutomateRecordApprover';"),(0,a.kt)("li",{parentName:"ul"},"EntitySetName = 'powerAutomateRecordApprovers';"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Custom Approver API")," (View custom approvers - depends on implementation of the approval logic)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"APIVersion = 'v1.0';"),(0,a.kt)("li",{parentName:"ul"},"EntityName = 'customApprover';"),(0,a.kt)("li",{parentName:"ul"},"EntitySetName = 'customApprovers';"),(0,a.kt)("li",{parentName:"ul"},"This API page is blank by default. The results depend on the flow implementation using the publisher of OnGetCustomApprover().")))))}d.isMDXComponent=!0},4180:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Approver-Groups-c89350456f02b08c1faa36010401cea5.png"},2106:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Approvers-d55df3d69320eec9c990e68dc104d816.png"},6444:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Power-Automate-Log-Entries-9c294cbb975861c959722041b1270a78.png"}}]);