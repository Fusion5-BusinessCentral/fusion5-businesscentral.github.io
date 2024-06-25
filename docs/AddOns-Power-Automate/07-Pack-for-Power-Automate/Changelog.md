---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
 
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
