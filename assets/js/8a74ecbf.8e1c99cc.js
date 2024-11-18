"use strict";(self.webpackChunkapp_source_documentation=self.webpackChunkapp_source_documentation||[]).push([[3193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=i,c=m["".concat(s,".").concat(g)]||m[g]||u[g]||r;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2,sidebar_class_name:"nav-det-level"},o="Change Log",l={unversionedId:"AddOns-Integrations/API-Integrator/Changelog",id:"AddOns-Integrations/API-Integrator/Changelog",title:"Change Log",description:"All notable changes to this project will be documented in this file.",source:"@site/docs/AddOns-Integrations/17-API-Integrator/Changelog.md",sourceDirName:"AddOns-Integrations/17-API-Integrator",slug:"/AddOns-Integrations/API-Integrator/Changelog",permalink:"/AddOns-Integrations/API-Integrator/Changelog",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"nav-det-level"},sidebar:"tutorialSidebar",previous:{title:"Functionality",permalink:"/AddOns-Integrations/API-Integrator/Functionality"},next:{title:"Pricing",permalink:"/AddOns-Integrations/API-Integrator/Pricing"}},s={},p=[{value:"1.5.0 - 2024-11-11",id:"150---2024-11-11",level:2},{value:"Fixes",id:"fixes",level:3},{value:"Changes",id:"changes",level:3},{value:"Obsoleted Functionality (will be removed in 26.0)",id:"obsoleted-functionality-will-be-removed-in-260",level:3},{value:"Obsoleted Functionality (will be removed in 27.0)",id:"obsoleted-functionality-will-be-removed-in-270",level:3},{value:"1.4.0 - 2024-08-08",id:"140---2024-08-08",level:2},{value:"Changes",id:"changes-1",level:3},{value:"1.3.0 - 2024-08-06",id:"130---2024-08-06",level:2},{value:"Changes",id:"changes-2",level:3},{value:"1.2.0 - 2024-07-24",id:"120---2024-07-24",level:2},{value:"Changes",id:"changes-3",level:3},{value:"1.1.0 - 2024-06-25",id:"110---2024-06-25",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"change-log"},"Change Log"),(0,i.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,i.kt)("h2",{id:"150---2024-11-11"},"[1.5.0]"," - 2024-11-11"),(0,i.kt)("p",null,"Available version: 24.0+"),(0,i.kt)("h3",{id:"fixes"},"Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed JQ description for Child (different request) mappings to show the correct direction of the parent mapping."),(0,i.kt)("li",{parentName:"ul"},"Fixed InherentPermissions to prevent issues when working in a multi-company environment where the user does not have access to all companies."),(0,i.kt)("li",{parentName:"ul"},"Fixed a problem when finding the coupled relationship record value.")),(0,i.kt)("h3",{id:"changes"},"Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Final refactoring to follow changes in v24 suggested by LinterCop."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Run Test")," action in ",(0,i.kt)("strong",{parentName:"li"},"Integration API Mappings")," renamed to ",(0,i.kt)("strong",{parentName:"li"},"Run Once (Foreground)"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The action now shows a dialogue to select whether to run ",(0,i.kt)("strong",{parentName:"li"},"Diff Sync")," (to synchronize only records modified since the last synchronization) or ",(0,i.kt)("strong",{parentName:"li"},"Full Sync")," (to run unconditional synchronization). Both actions behave the same if the mapping does not support differential updates."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Integration API Mappings")," page filtered automatically to mappings with ",(0,i.kt)("strong",{parentName:"li"},"Delete After Synchronization")," to hide temporary mappings generated in the background when running full synchronization."),(0,i.kt)("li",{parentName:"ul"},"New fields in ",(0,i.kt)("strong",{parentName:"li"},"Integration API Mappings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Synch. to BC API Filter Field Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Minimum Synch. to BC API Filter Field Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Minimum Synch. to BC Modified Since"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"These fields allow for the configuration of API mapping to support differential synchronization.\n",(0,i.kt)("strong",{parentName:"li"},"Minimum")," fields specify the datetime of the first records to synchronize. This field is never updated automatically."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"other")," fields are used to specify the datetime of the last synchronization. This field is updated automatically using the value from the ",(0,i.kt)("strong",{parentName:"li"},"Integration API Field Mapping")," with ",(0,i.kt)("strong",{parentName:"li"},"Subtype")," = ",(0,i.kt)("strong",{parentName:"li"},"Last Modification DateTime"),"."),(0,i.kt)("li",{parentName:"ul"},"If both fields are used and have configured the same value (e.g. Minimum and the other field have ",(0,i.kt)("strong",{parentName:"li"},"ModifiedSince")," field), the MAXVALUE(MinimumField, OtherField) is used."),(0,i.kt)("li",{parentName:"ul"},"If both fields are used and have configured a different value (e.g. Minimum field has ",(0,i.kt)("strong",{parentName:"li"},"CreatedSince")," and the other field has ",(0,i.kt)("strong",{parentName:"li"},"ModifiedSince")," field), both values are sent independently."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Job Queue Category Code"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allows you to specify the ",(0,i.kt)("strong",{parentName:"li"},"Job Queue Category")," that will be used to run the selected mapping. This option can be used to schedule job queues to run in parallel (standard BC behaviour - if JQ entries have the same category, they run in sequence)."))))),(0,i.kt)("li",{parentName:"ul"},"New options for ",(0,i.kt)("strong",{parentName:"li"},"Integration API Field Mapping"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Data Format (implemented for ToAPI only)"),(0,i.kt)("li",{parentName:"ul"},"Data Format Type (implemented for ToAPI only)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-format-property"},"https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-format-property")," for details (Data Format = first column from the documentation page, Data Format Type = second column from the documentation page)"),(0,i.kt)("li",{parentName:"ul"},"Only one of those two fields can be specified."))))),(0,i.kt)("li",{parentName:"ul"},"New fields in ",(0,i.kt)("strong",{parentName:"li"},"Integration API Mappings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"One Time Synchronization Job Queue Category Code"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allows to specify ",(0,i.kt)("strong",{parentName:"li"},"Job Queue Category")," that will be used to run full synchronizations."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API Synchronization Errors")," page contains new action ",(0,i.kt)("strong",{parentName:"li"},"Show Error Details")," that shows full, untruncated, error details."),(0,i.kt)("li",{parentName:"ul"},"Added support for Deleting HTTP requests. This is currently not implemented for this module but can be used by custom implementations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Accept = application/json")," HTTP header is added automatically to every request and does not need to be specified in ",(0,i.kt)("strong",{parentName:"li"},"Custom HTTP Headers table"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API Synch. Job")," now supports retention policy",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Records must be kept for at least 7 days."),(0,i.kt)("li",{parentName:"ul"},"The default suggested filter is to delete entries after 3 months (editable)."))),(0,i.kt)("li",{parentName:"ul"},"Improved permission sets",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API Integration - Read")," (allows to read all tables)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API Integration - Standard")," (allows to use and run synchronizations)"),(0,i.kt)("li",{parentName:"ul"},"Extended permission sets",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"D365 READ")," contains ",(0,i.kt)("strong",{parentName:"li"},"API Integration - Read")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"D365 BASIC")," contains ",(0,i.kt)("strong",{parentName:"li"},"API Integration - Standard"))))))),(0,i.kt)("h3",{id:"obsoleted-functionality-will-be-removed-in-260"},"Obsoleted Functionality (will be removed in 26.0)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Field Subtype")," value ",(0,i.kt)("strong",{parentName:"li"},"Create DateTime")," from ",(0,i.kt)("strong",{parentName:"li"},"Integration API Field Mapping")," will be removed.")),(0,i.kt)("h3",{id:"obsoleted-functionality-will-be-removed-in-270"},"Obsoleted Functionality (will be removed in 27.0)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CreateRecord()")," procedures in ",(0,i.kt)("strong",{parentName:"li"},"Integration API Mapping")," with IntegrationAPIType + IntegrationAPIMappingName parameters replaced by procedures with IntegrationAPIMapping record parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Error Message")," text 2048 field in ",(0,i.kt)("strong",{parentName:"li"},"API Synch. Job Errors")," was replaced by a blob (unlimited text length) field.")),(0,i.kt)("h2",{id:"140---2024-08-08"},"[1.4.0]"," - 2024-08-08"),(0,i.kt)("p",null,"Available version: 24.0+"),(0,i.kt)("h3",{id:"changes-1"},"Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The REST logic was improved by adding a handling for ",(0,i.kt)("strong",{parentName:"li"},"Too many requests")," response. Administrators can enable this logic in ",(0,i.kt)("strong",{parentName:"li"},"Integration API Setup")," using ",(0,i.kt)("strong",{parentName:"li"},"Repeat Request on Too Many Requests"),". Administrators can also use ",(0,i.kt)("strong",{parentName:"li"},"Too Many Requests HTTP Code")," field in case the response code is different from what is used in standard HTTP implementation (429) and also ",(0,i.kt)("strong",{parentName:"li"},"Wait Time After Too Many Requests (Seconds)")," if they want use different wait time (default = 1 minute)."),(0,i.kt)("li",{parentName:"ul"},"Refactoring to follow changes in v24 (part 2/2).")),(0,i.kt)("h2",{id:"130---2024-08-06"},"[1.3.0]"," - 2024-08-06"),(0,i.kt)("p",null,"Available version: 24.0+"),(0,i.kt)("h3",{id:"changes-2"},"Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added permissionset ",(0,i.kt)("strong",{parentName:"li"},"API Integration - Map. Setup")," that has full setup rights for mapping and integration setups."),(0,i.kt)("li",{parentName:"ul"},"Standard users do not need special permission. Required permissions were added to standard ",(0,i.kt)("strong",{parentName:"li"},"D365 BASIC")," permission set. Users have direct read permissions for mapping and related tables and indirect read for coupling tables. Users also have indirect permissions only for coupling records and synchronization log to allow creating records in those tables without specific permissions."),(0,i.kt)("li",{parentName:"ul"},"New action ",(0,i.kt)("strong",{parentName:"li"},"Recreate Job Queue Entry")," was added to ",(0,i.kt)("strong",{parentName:"li"},"Integration API Mappings")," to allow administrators to recreate synchronization job queues in case they were deleted in the past or never created."),(0,i.kt)("li",{parentName:"ul"},"Refactoring to follow changes in v24 (part 1/2).")),(0,i.kt)("h2",{id:"120---2024-07-24"},"[1.2.0]"," - 2024-07-24"),(0,i.kt)("p",null,"Available version: 23.0+"),(0,i.kt)("h3",{id:"changes-3"},"Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refactoring of the integration with REST module from IT Pack to better support testability and maintainability of the integrations."),(0,i.kt)("li",{parentName:"ul"},"Support was added for change synchronization of child records even when the parent has not been changed.\nThe pagination logic was updated to allow an unlimited response page size. This can be configured by setting the page size to ",(0,i.kt)("strong",{parentName:"li"},"-1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Integration API Mapping")," now supports a new direction - ",(0,i.kt)("strong",{parentName:"li"},"Child (Different Request)"),"\nThis direction allows linking one mapping to another. These linked mappings will be run automatically after the parent mapping and may reuse identifiers from the parent mappings. For example, this may be used to integrate document headers and lines when there are two separate API endpoints for both records."),(0,i.kt)("li",{parentName:"ul"},"Configurable Parent-Child relationships:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Available for both directions ",(0,i.kt)("strong",{parentName:"li"},"From API")," and ",(0,i.kt)("strong",{parentName:"li"},"To API"),", can be configured on ",(0,i.kt)("strong",{parentName:"li"},"Integration API Mapping"),"."),(0,i.kt)("li",{parentName:"ul"},"Child mapping must define parent mapping using the ",(0,i.kt)("strong",{parentName:"li"},"Parent Name")," field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"From API to BC"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It can be configured using the ",(0,i.kt)("strong",{parentName:"li"},"Parent Child URL Link")," field. The Admin can use the ",(0,i.kt)("strong",{parentName:"li"},"%1")," placeholder, which will be replaced by the parent API ID during the synchronization."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"To API from BC"),"\nRelationships between BC tables can be configured using the Table ",(0,i.kt)("strong",{parentName:"li"},"Relations module")," from the ",(0,i.kt)("strong",{parentName:"li"},"IT Pack"),".\nAdmin can specify the corresponding relation code in the ",(0,i.kt)("strong",{parentName:"li"},"Parent Table Relation Code")," field and define mapping fields directly on the child ",(0,i.kt)("strong",{parentName:"li"},"Integration API Mapping"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Integration API Mapping")," contains a new field ",(0,i.kt)("strong",{parentName:"li"},"Coupling Group Code")," (the field has a relation to a new table ",(0,i.kt)("strong",{parentName:"li"},"Coupling Group"),").",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This field allows splitting coupling records for the same BC table into multiple groups.\nThe field is blank by default. This means all mappings for the same BC table are shared across all mappings."),(0,i.kt)("li",{parentName:"ul"},"If two mappings have two different ",(0,i.kt)("strong",{parentName:"li"},"Coupling Group Code"),"s, the created ",(0,i.kt)("strong",{parentName:"li"},"API Coupling Record"),"s will be used only by mappings with the corresponding code. This allows for creating two separate mappings (for example, one for sales invoices and one for sales credit memos) and having the same API ID for both invoice and credit memo. Without this option, the other record will not be created."),(0,i.kt)("li",{parentName:"ul"},"This field can not be changed once ",(0,i.kt)("strong",{parentName:"li"},"API Coupling Record"),"s exist."))),(0,i.kt)("li",{parentName:"ul"},"PUT Request ",(0,i.kt)("strong",{parentName:"li"},"Identifier Location")," in ",(0,i.kt)("strong",{parentName:"li"},"Integration API Setup")," was extended by a new option ",(0,i.kt)("strong",{parentName:"li"},"URL (without API Name)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Body")," = the record identifier, which is part of the request body and includes the API field name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URL (with API Name)")," = the record identifier is part of the request URL, including the API Field name. Example ",(0,i.kt)("strong",{parentName:"li"},"?Document=204fd8ac-e57d-416b-8338-7b3fa0acd4f0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URL (without API Name)")," = the record identifier is part of the request URL. The API Field name is not used. Example ",(0,i.kt)("strong",{parentName:"li"},"/204fd8ac-e57d-416b-8338-7b3fa0acd4f0"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Integration API Field Mapping")," has a new option ",(0,i.kt)("strong",{parentName:"li"},"Skip if Zero/Empty/Null")," (supported for From API to BC direction). This option can be used only if the field mapping is set as ",(0,i.kt)("strong",{parentName:"li"},"Optional"),". If selected, the blank value from the API will not override the existing value in BC."),(0,i.kt)("li",{parentName:"ul"},"New events in ",(0,i.kt)("strong",{parentName:"li"},'codeunit 71698071 "FS5A17 From API Events"'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'OnAfterCompleteSynchronization(var IntegrationAPIMapping: Record "FS5A17 Integration API Mapping"; var JsonObject: JsonObject; var DestinationRecordRef: RecordRef; APIID: Guid)'),(0,i.kt)("li",{parentName:"ul"},'OnAfterUpdateRecordAfterInsertBeforeCallModify(var DestinationRecordRef: RecordRef; OriginalDestinationRecordRef: RecordRef; var TempIntegrAPIFieldMap: Record "FS5A17 Integr. API Field Map." temporary; var Modified: Boolean)'))),(0,i.kt)("li",{parentName:"ul"},"New events in ",(0,i.kt)("strong",{parentName:"li"},'codeunit 71698072 "FS5A17 Integ. API Synch Events"'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'OnProcessPaginationHandlerResponseBeforeRemovePaginationSection(IntegrationAPIMapping: Record "FS5A17 Integration API Mapping"; var JsonObject: JsonObject; var Response: Text; var IsHandled: Boolean)'),(0,i.kt)("li",{parentName:"ul"},'OnBeforeCallHttpRequest(var HttpRequestType: Enum "Http Request Type"; IntegrationAPIMapping: Record "FS5A17 Integration API Mapping"; var RESTHandler: Codeunit "FS5A17 REST Handler"; var URL: Text; var ContentInStream: InStream; var ContentType: Text; var IsHandled: Boolean)'))),(0,i.kt)("li",{parentName:"ul"},"New events in ",(0,i.kt)("strong",{parentName:"li"},'codeunit 71698070 "FS5A17 To API Events"'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'OnAfterUnchangedRecordHandled(IntegrationAPIMapping: Record "FS5A17 Integration API Mapping"; APIID: Guid; SourceRecordRef: RecordRef; var DestinationJsonObject: JsonObject)'),(0,i.kt)("li",{parentName:"ul"},'OnResetChildMappingsFromHeaderMappingBeforePerformAdditionalSynchFromAPITable(HeaderIntegrationAPIMapping: Record "FS5A17 Integration API Mapping"; var IntegrationAPIMapping: Record "FS5A17 Integration API Mapping"; RecordRef: RecordRef; var ChildRecordRef: RecordRef; ParentAPIID: Guid; var IsHandled: Boolean)')))),(0,i.kt)("h2",{id:"110---2024-06-25"},"[1.1.0]"," - 2024-06-25"),(0,i.kt)("p",null,"Available version: 23.0+"),(0,i.kt)("p",null,"First App-Source version"))}u.isMDXComponent=!0}}]);