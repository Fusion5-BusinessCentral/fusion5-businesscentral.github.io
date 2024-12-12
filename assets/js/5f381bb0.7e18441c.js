"use strict";(self.webpackChunkapp_source_documentation=self.webpackChunkapp_source_documentation||[]).push([[6382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:1,sidebar_class_name:"nav-det-level"},i="Functionality",l={unversionedId:"AddOns-Finance/Expense-Recovery/Functionality",id:"AddOns-Finance/Expense-Recovery/Functionality",title:"Functionality",description:"Setup",source:"@site/docs/AddOns-Finance/16-Expense-Recovery/Functionality.md",sourceDirName:"AddOns-Finance/16-Expense-Recovery",slug:"/AddOns-Finance/Expense-Recovery/Functionality",permalink:"/AddOns-Finance/Expense-Recovery/Functionality",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"nav-det-level"},sidebar:"tutorialSidebar",previous:{title:"Expense Recovery",permalink:"/category/expense-recovery"},next:{title:"Change Log",permalink:"/AddOns-Finance/Expense-Recovery/Changelog"}},o={},p=[{value:"Setup",id:"setup",level:2},{value:"Company Setup",id:"company-setup",level:3},{value:"Expense Recovery source",id:"expense-recovery-source",level:3},{value:"Target Sales Document Setup",id:"target-sales-document-setup",level:3},{value:"Additional Expense Recovery Setup",id:"additional-expense-recovery-setup",level:3},{value:"Expense Recovery Target Line Mapping",id:"expense-recovery-target-line-mapping",level:3},{value:"Expense Recovery Worksheet",id:"expense-recovery-worksheet",level:2},{value:"Extract",id:"extract",level:3},{value:"Validate",id:"validate",level:3},{value:"Generate Lines in Target Company",id:"generate-lines-in-target-company",level:3},{value:"Generate Sales Documents",id:"generate-sales-documents",level:3},{value:"Processed Expense Recovery Lines",id:"processed-expense-recovery-lines",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"functionality"},"Functionality"),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Expense Recovery Setup contains all Expense Recovery Setup."),(0,r.kt)("h3",{id:"company-setup"},"Company Setup"),(0,r.kt)("p",null,"The most important setup specifies how the entries are generated."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(6439).Z,width:"964",height:"696"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Company Type"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specifies how the current company is used for Expense Recovery."),(0,r.kt)("li",{parentName:"ul"},"Values",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The current company only extracts expenses and transfers expense recovery entries to different companies."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Target Company Name")," is mandatory when selecting this field!"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Target"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The current company only generates sales documents from expense recovery entries transferred from a different company(ies) marked as ",(0,r.kt)("strong",{parentName:"li"},"Company Type = Source"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Both"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The current company is used to extract expenses and generate sales documents."))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Target Company Name"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},"Company Type = Source"))))),(0,r.kt)("h3",{id:"expense-recovery-source"},"Expense Recovery source"),(0,r.kt)("p",null,"This section is used only when ",(0,r.kt)("strong",{parentName:"p"},"Company Type")," is ",(0,r.kt)("strong",{parentName:"p"},"Source")," or ",(0,r.kt)("strong",{parentName:"p"},"Both"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Suggest from Purch. Invoice Headers"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specifies whether the system should suggest expense recovery entries from purchase headers. "),(0,r.kt)("li",{parentName:"ul"},"NOTE: Header is used only for filtering. Expense recovery entries are always created using the document lines. If the purchase header level is used, all lines from the document are used. If you want to extract only specific lines, use ",(0,r.kt)("strong",{parentName:"li"},"Suggest from Purch. Invoice Lines")," instead."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purchase Invoice Header Filter"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allows to specify default filters that define records included in expense recovery."),(0,r.kt)("li",{parentName:"ul"},"For example, if you want to extract only purchase invoice lines from documents with posting group = ",(0,r.kt)("strong",{parentName:"li"},"Billable"),", apply the filter in this field."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Suggest from Purch. Invoice Lines"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specifies whether the system should suggest expense recovery entries from purchase lines."),(0,r.kt)("li",{parentName:"ul"},"Use this option to specify filters on the purchase line level."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purchase Invoice Line Filter"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allows to specify default filters that define records included in expense recovery."),(0,r.kt)("li",{parentName:"ul"},"For example, if you want to extract only purchase invoice lines with dimension ",(0,r.kt)("strong",{parentName:"li"},"Billable")," = ",(0,r.kt)("strong",{parentName:"li"},"Yes"),", apply the filter in this field."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purchase Invoice Target Customer Type"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specifies how the customer is calculated in the target sales document. The customer can be specified as a dimension in the source purchase document or could have the same number as the vendor (buy-from/pay-to) vendor in the source document.")))),(0,r.kt)("h3",{id:"target-sales-document-setup"},"Target Sales Document Setup"),(0,r.kt)("p",null,"This section is used only when ",(0,r.kt)("strong",{parentName:"p"},"Company Type")," is ",(0,r.kt)("strong",{parentName:"p"},"Target")," or ",(0,r.kt)("strong",{parentName:"p"},"Both"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Target Sales Document Type"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specifies the type of the sales document created."),(0,r.kt)("li",{parentName:"ul"},"The default value is ",(0,r.kt)("strong",{parentName:"li"},"Invoice")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Target Line Quantity"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specifies how the target document is calculated."),(0,r.kt)("li",{parentName:"ul"},"Values",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Original"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The sales lines have the same quantity as the original document."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Always 1"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The sales lines have always quantity = 1."),(0,r.kt)("li",{parentName:"ul"},"The target sales line unit price equals the line amount of the source line."))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Target No. for Missing Mapping"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specifies what value is used as ",(0,r.kt)("strong",{parentName:"li"},"Target No.")," if the source combination is not found in ",(0,r.kt)("strong",{parentName:"li"},"Expense Recovery Target Line Mapping"),"."),(0,r.kt)("li",{parentName:"ul"},"Values",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Blank Value"),"\nIf the combination is not found, the expense recovery worksheet will show blank values. The user will need to add the target number manually."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Same No."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"if the combination is not found, the system will suggest the same type/no. as is used in the source document (if supported, only G/L Accounts, Items and Resources are supported for target documents.).")))))))),(0,r.kt)("h3",{id:"additional-expense-recovery-setup"},"Additional Expense Recovery Setup"),(0,r.kt)("p",null,"The following fields are less critical but still practical."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prices Including VAT"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specify whether the prices in the ",(0,r.kt)("strong",{parentName:"li"},"Expense Recovery Worksheet")," include VAT.")))),(0,r.kt)("h3",{id:"expense-recovery-target-line-mapping"},"Expense Recovery Target Line Mapping"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Expense Recovery Target Line Mapping")," specifies the mapping between the source and target document lines."),(0,r.kt)("p",null,"The mapping allows to define mapping for (priority):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For all Nos. of specific type (lowest)"),(0,r.kt)("li",{parentName:"ol"},"For Source Nos. using a filter value"),(0,r.kt)("li",{parentName:"ol"},"Specific Source No. (Highest)")),(0,r.kt)("p",null,"The behaviour for combinations not specified in the mapping can be changed in the Expense Recovery Setup using the ",(0,r.kt)("strong",{parentName:"p"},"Target No. for Missing Mapping")," field."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(1771).Z,width:"963",height:"652"})),(0,r.kt)("h2",{id:"expense-recovery-worksheet"},"Expense Recovery Worksheet"),(0,r.kt)("p",null,"The Expense Recovery Worksheet is the core part of the add-on. From this page, users can extract expenses, validate the extracted data, see found issues, and generate target documents."),(0,r.kt)("p",null,"The process is"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Extract Expenses"),(0,r.kt)("li",{parentName:"ul"},"Validate Extracted Data"),(0,r.kt)("li",{parentName:"ul"},"(Generate Lines in Target Company), only for ",(0,r.kt)("strong",{parentName:"li"},"Company Type")," = ",(0,r.kt)("strong",{parentName:"li"},"Source")),(0,r.kt)("li",{parentName:"ul"},"Generate Sales Documents ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(7926).Z,width:"1794",height:"530"})),(0,r.kt)("h3",{id:"extract"},"Extract"),(0,r.kt)("p",null,"When the action is run, the user can specify the date range for which the expenses should be extracted. Processed expenses are stored in the ",(0,r.kt)("strong",{parentName:"p"},"Processed Expense Recovery Lines")," table and are not suggested twice."),(0,r.kt)("p",null,"The system will automatically apply configured filters."),(0,r.kt)("h3",{id:"validate"},"Validate"),(0,r.kt)("p",null,"The system automatically verifies existing lines in ",(0,r.kt)("strong",{parentName:"p"},"Expense Recovery Worksheet"),"when the action is run. Suppose any error is found (missing records in related tables, missing records in the target company, missing setup, etc.). In that case, the line is marked as ",(0,r.kt)("strong",{parentName:"p"},"Has Error")," = ",(0,r.kt)("strong",{parentName:"p"},"Yes")," and the error details are added to the error details field."),(0,r.kt)("p",null,"Users must resolve all errors or remove the lines before generating sales documents/lines in the target company."),(0,r.kt)("h3",{id:"generate-lines-in-target-company"},"Generate Lines in Target Company"),(0,r.kt)("p",null,"This action is visible only when the ",(0,r.kt)("strong",{parentName:"p"},"Company Type")," = ",(0,r.kt)("strong",{parentName:"p"},"Source"),"."),(0,r.kt)("p",null,"This action moves records from the ",(0,r.kt)("strong",{parentName:"p"},"Expense Recovery Workset")," in the source company to e ",(0,r.kt)("strong",{parentName:"p"},"Expense Recovery Workset")," in the target company."),(0,r.kt)("h3",{id:"generate-sales-documents"},"Generate Sales Documents"),(0,r.kt)("p",null,"This action is visible only when the ",(0,r.kt)("strong",{parentName:"p"},"Company Type")," = ",(0,r.kt)("strong",{parentName:"p"},"Target")," or ",(0,r.kt)("strong",{parentName:"p"},"Both"),"."),(0,r.kt)("p",null,"This action generates sales documents from lines in ",(0,r.kt)("strong",{parentName:"p"},"Expense Recovery Worksheet"),"."),(0,r.kt)("h2",{id:"processed-expense-recovery-lines"},"Processed Expense Recovery Lines"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Processed Expense Recovery Lines")," contains processed lines from ",(0,r.kt)("strong",{parentName:"p"},"Expense Recovery Worksheet"),". Furthermore, this page contains information about created sales document (applies only to companies with ",(0,r.kt)("strong",{parentName:"p"},"Company Type")," = Target or Both) such as created sales document number or posted invoice number."))}m.isMDXComponent=!0},6439:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ExpenseRecoverySetup-6bac76c612fb5d46e24bd8636284845a.png"},1771:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ExpenseRecoveryTargetLineMapping-22ce383e1c58d1eb26eedb9e9be15410.png"},7926:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ExpenseRecoveryWorksheet-fb802a576323bdf45435a1a25418a25c.png"}}]);