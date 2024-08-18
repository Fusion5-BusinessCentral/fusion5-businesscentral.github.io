---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
  
## [1.4.0] - 2024-08-08
  
Available version: 24.0+

### Changes
- The REST logic was improved by adding a handling for **Too many requests** response. Administrators can enable this logic in **Integration API Setup** using **Repeat Request on Too Many Requests**. Administrators can also use **Too Many Requests HTTP Code** field in case the response code is different from what is used in standard HTTP implementation (429) and also **Wait Time After Too Many Requests (Seconds)** if they want use different wait time (default = 1 minute).
- Refactoring to follow changes in v24 (part 2/2).

## [1.3.0] - 2024-08-06
  
Available version: 24.0+

### Changes
- Added permissionset **API Integration - Map. Setup** that has full setup rights for mapping and integration setups.
- Standard users do not need special permission. Required permissions were added to standard **D365 BASIC** permission set. Users have direct read permissions for mapping and related tables and indirect read for coupling tables. Users also have indirect permissions only for coupling records and synchronization log to allow creating records in those tables without specific permissions.
- New action **Recreate Job Queue Entry** was added to **Integration API Mappings** to allow administrators to recreate synchronization job queues in case they were deleted in the past or never created.
- Refactoring to follow changes in v24 (part 1/2).

## [1.2.0] - 2024-07-24
  
Available version: 23.0+

### Changes
- Refactoring of the integration with REST module from IT Pack to better support testability and maintainability of the integrations.
- Support was added for change synchronization of child records even when the parent has not been changed.
The pagination logic was updated to allow an unlimited response page size. This can be configured by setting the page size to **-1**.
- **Integration API Mapping** now supports a new direction - **Child (Different Request)**
  This direction allows linking one mapping to another. These linked mappings will be run automatically after the parent mapping and may reuse identifiers from the parent mappings. For example, this may be used to integrate document headers and lines when there are two separate API endpoints for both records.
- Configurable Parent-Child relationships:
  - Available for both directions **From API** and **To API**, can be configured on **Integration API Mapping**.
  - Child mapping must define parent mapping using the **Parent Name** field.
  - **From API to BC**
    - It can be configured using the **Parent Child URL Link** field. The Admin can use the **%1** placeholder, which will be replaced by the parent API ID during the synchronization.
  - **To API from BC**
    Relationships between BC tables can be configured using the Table **Relations module** from the **IT Pack**.
    Admin can specify the corresponding relation code in the **Parent Table Relation Code** field and define mapping fields directly on the child **Integration API Mapping**.
- **Integration API Mapping** contains a new field **Coupling Group Code** (the field has a relation to a new table **Coupling Group**).
  - This field allows splitting coupling records for the same BC table into multiple groups.
  The field is blank by default. This means all mappings for the same BC table are shared across all mappings.
  - If two mappings have two different **Coupling Group Code**s, the created **API Coupling Record**s will be used only by mappings with the corresponding code. This allows for creating two separate mappings (for example, one for sales invoices and one for sales credit memos) and having the same API ID for both invoice and credit memo. Without this option, the other record will not be created.
  - This field can not be changed once **API Coupling Record**s exist.
- PUT Request **Identifier Location** in **Integration API Setup** was extended by a new option **URL (without API Name)**
  - **Body** = the record identifier, which is part of the request body and includes the API field name.
  - **URL (with API Name)** = the record identifier is part of the request URL, including the API Field name. Example **?Document=204fd8ac-e57d-416b-8338-7b3fa0acd4f0**.
  - **URL (without API Name)** = the record identifier is part of the request URL. The API Field name is not used. Example **/204fd8ac-e57d-416b-8338-7b3fa0acd4f0**.
- **Integration API Field Mapping** has a new option **Skip if Zero/Empty/Null** (supported for From API to BC direction). This option can be used only if the field mapping is set as **Optional**. If selected, the blank value from the API will not override the existing value in BC.
- New events in **codeunit 71698071 "FS5A17 From API Events"**
  - OnAfterCompleteSynchronization(var IntegrationAPIMapping: Record "FS5A17 Integration API Mapping"; var JsonObject: JsonObject; var DestinationRecordRef: RecordRef; APIID: Guid)
  - OnAfterUpdateRecordAfterInsertBeforeCallModify(var DestinationRecordRef: RecordRef; OriginalDestinationRecordRef: RecordRef; var TempIntegrAPIFieldMap: Record "FS5A17 Integr. API Field Map." temporary; var Modified: Boolean)
- New events in **codeunit 71698072 "FS5A17 Integ. API Synch Events"**
  - OnProcessPaginationHandlerResponseBeforeRemovePaginationSection(IntegrationAPIMapping: Record "FS5A17 Integration API Mapping"; var JsonObject: JsonObject; var Response: Text; var IsHandled: Boolean)
  - OnBeforeCallHttpRequest(var HttpRequestType: Enum "Http Request Type"; IntegrationAPIMapping: Record "FS5A17 Integration API Mapping"; var RESTHandler: Codeunit "FS5A17 REST Handler"; var URL: Text; var ContentInStream: InStream; var ContentType: Text; var IsHandled: Boolean)
- New events in **codeunit 71698070 "FS5A17 To API Events"**
  - OnAfterUnchangedRecordHandled(IntegrationAPIMapping: Record "FS5A17 Integration API Mapping"; APIID: Guid; SourceRecordRef: RecordRef; var DestinationJsonObject: JsonObject)
  - OnResetChildMappingsFromHeaderMappingBeforePerformAdditionalSynchFromAPITable(HeaderIntegrationAPIMapping: Record "FS5A17 Integration API Mapping"; var IntegrationAPIMapping: Record "FS5A17 Integration API Mapping"; RecordRef: RecordRef; var ChildRecordRef: RecordRef; ParentAPIID: Guid; var IsHandled: Boolean)

## [1.1.0] - 2024-06-25
  
Available version: 23.0+

First App-Source version