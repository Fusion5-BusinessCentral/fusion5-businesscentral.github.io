---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
  
## [2.0.0.2] - 2024-08-26
  
Available version: 24.0+

### Changes
- Logic to handle multiple workflows for the vendor record.
- Added default retention policy setup.
- **Power Automate Flow Tracked Field** extended by tolerance fields -> if the field value change is within the tolerance (absolute or percentage), the record will stay approved.
- Flows on the Power Automate Flows page can now be enabled/disabled only using actions. The field itself is no longer editable.
- The **Posted Power Automate Log Entries** page contains Power Automate Log entries for posted documents. Whether this table is used and how the records are created depends on the flow implementation (e.g., this table is not used for vendor bank account approval, but it is used for purchase line approval, where records are created once the document is posted). 
- New API pages:
  - **Power Automate Record Approvers API**
  - **Custom Approver API**
    - This API page is blank by default. The results depend on the flow implementation using the publisher of OnGetCustomApprover().
- New setup modules:
  - The **Power Automate Flow Template** page, accessible from **Power Automate Flow**, allows you to download ZIP files containing the predefined Power Automate solutions that can be imported to Power Automate.
  - Enum **Additional Tracked Table** specifying additional tables that can be tracked for approval records
    - Option: **Power Automate Flow Tracked Document Dimension**
  - **Power Automate Record Approver** module accessible from **Power Automate Flow**
    - This page has two modes (see below, **Power Automate Flow Setup**): Simple and Advanced.
    - The simple mode allows you to create record approver groups with a 1:1:1 ratio (one group—one approver—one record).
    - The advanced option allows you to create record approver groups with a 1:N:N relation (one group—multiple approvers—multiple records).
  - Generic **Power Automate Flow Setup** (one per company, not per flow)
    - **Record Approver Type** - Simple or Advanced. Specifies what the Record Approvers page looks like.
      - Simple: The Record Approver setup always has one approver, record, and group.
      - Advanced: Record Approver setup is 1:N for approvers and records (one approver group could contain multiple approvers and be used for various records).
  - **Power Automate Flow Extended Setup** (one per flow)
    - Contains additional flow setup (if supported by the flow). Not available by default.

### Fixes
- Links to documentation/licensing T&C are not working correctly.

### Obsoleted Functionality (will be removed in 26.0)
- There are no obsoleted functions from the user's perspective.
- Obsoleted functions/objects:
  - 71697827 "FS5B07 Install Mgt." (will be set as internal)
  - 71697826 "FS5B07 Upgrade" (will be set as internal)

## [1.2.0] - 2024-07-28
  
Available version: 23.0+

### Changes
- Logic will handle multiple workflows for the vendor record.

### Fixes
- Links to documentation/licensing T&C are not working correctly.

## [1.1.0] - 2024-03-05
  
Available version: 23.0+

### Changes
- Limit Power Automate workflow for selected records in a table only using **Power Automate Flow Record Limitation**.
- Generic table **Power Automate Flow Tracked Field** where users can specify tracked fields for every Power Automate workflow.
- Major refactoring of interfaces used for implementing custom power automate flows.
  - interface "FS5B07 Manage PA Workflow"
    - procedure EnableWorkflow()
    - procedure DisableWorkflow()
  - interface "FS5B07 Run PA Workflow"
    - procedure IsWorkflowEnabled(): Boolean;
    - procedure IsWorkflowEnabledForRecord(RecordVariant: Variant): Boolean;
    - procedure GetSourceTable() SourceTableNo: Integer
    - procedure SetApprovalStatus(SourceRecordID: Guid; NewApprovalStatus: Enum "FS5B07 Approval Status");

### Obsoleted Functions (will be removed in 25.0)
- There are no obsoleted functions from the user perspective.
- Obsoleted functions/objects:
  - interface "FS5B07 PA Workflow" (replaced by "FS5B07 Manage PA Workflow" and "FS5B07 Run PA Workflow" interfaces)
  - codeunit 71697825 "FS5B07 Workflow N/A"
  - enum 71697826 "FS5B07 PA Workflow Type" now implements "FS5B07 PA Workflow", "FS5B07 Manage PA Workflow", "FS5B07 Run PA Workflow" (with all interfaces having default implementation). After 25.0 the enum will implement only "FS5B07 Manage PA Workflow", "FS5B07 Run PA Workflow"

## [1.0.0] - 2024-02-04
  
Available version: 23.0+

First App-Source version based on our legacy Pack for Power Automate
