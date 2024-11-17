---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
  
## [1.5.0] - 2024-11-11
  
Available version: 24.0+

### Fixes
- Fixed JQ description for Child (different request) mappings to show the correct direction of the parent mapping.
- Fixed InherentPermissions to prevent issues when working in a multi-company environment where the user does not have access to all companies.
- Fixed a problem when finding the coupled relationship record value.

### Changes
- Final refactoring to follow changes in v24 suggested by LinterCop.
- **Run Test** action in **Integration API Mappings** renamed to **Run Once (Foreground)**.
  - The action now shows a dialogue to select whether to run **Diff Sync** (to synchronize only records modified since the last synchronization) or **Full Sync** (to run unconditional synchronization). Both actions behave the same if the mapping does not support differential updates.
- **Integration API Mappings** page filtered automatically to mappings with **Delete After Synchronization** to hide temporary mappings generated in the background when running full synchronization.
- New fields in **Integration API Mappings**
  - **Synch. to BC API Filter Field Name**
  - **Minimum Synch. to BC API Filter Field Name**
  - **Minimum Synch. to BC Modified Since**
    - These fields allow for the configuration of API mapping to support differential synchronization.
    **Minimum** fields specify the datetime of the first records to synchronize. This field is never updated automatically.
    - The **other** fields are used to specify the datetime of the last synchronization. This field is updated automatically using the value from the **Integration API Field Mapping** with **Subtype** = **Last Modification DateTime**.
    - If both fields are used and have configured the same value (e.g. Minimum and the other field have **ModifiedSince** field), the MAXVALUE(MinimumField, OtherField) is used.
    - If both fields are used and have configured a different value (e.g. Minimum field has **CreatedSince** and the other field has **ModifiedSince** field), both values are sent independently.
  - **Job Queue Category Code**
    - Allows you to specify the **Job Queue Category** that will be used to run the selected mapping. This option can be used to schedule job queues to run in parallel (standard BC behaviour - if JQ entries have the same category, they run in sequence).
- New options for **Integration API Field Mapping**
  - Data Format (implemented for ToAPI only)
  - Data Format Type (implemented for ToAPI only)
    - See https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-format-property for details (Data Format = first column from the documentation page, Data Format Type = second column from the documentation page)
    - Only one of those two fields can be specified.
- New fields in **Integration API Mappings**
  - **One Time Synchronization Job Queue Category Code**
    - Allows to specify **Job Queue Category** that will be used to run full synchronizations.
- **API Synchronization Errors** page contains new action **Show Error Details** that shows full, untruncated, error details.
- Added support for Deleting HTTP requests. This is currently not implemented for this module but can be used by custom implementations.
- **Accept = application/json** HTTP header is added automatically to every request and does not need to be specified in **Custom HTTP Headers table**.
- **API Synch. Job** now supports retention policy
  - Records must be kept for at least 7 days.
  - The default suggested filter is to delete entries after 3 months (editable).
- Improved permission sets
  - **API Integration - Read** (allows to read all tables)
  - **API Integration - Standard** (allows to use and run synchronizations)
  - Extended permission sets
    - **D365 READ** contains **API Integration - Read**
    - **D365 BASIC** contains **API Integration - Standard**

### Obsoleted Functionality (will be removed in 26.0)
- **Field Subtype** value **Create DateTime** from **Integration API Field Mapping** will be removed.

### Obsoleted Functionality (will be removed in 27.0)
- **CreateRecord()** procedures in **Integration API Mapping** with IntegrationAPIType + IntegrationAPIMappingName parameters replaced by procedures with IntegrationAPIMapping record parameter.
- **Error Message** text 2048 field in **API Synch. Job Errors** was replaced by a blob (unlimited text length) field.

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