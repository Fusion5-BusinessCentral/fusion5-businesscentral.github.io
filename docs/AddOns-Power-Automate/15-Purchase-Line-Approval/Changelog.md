---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.

## [2.0.0.1] - 2024-07-31
  
Available version: 24.0+

### Changes
- Approval actions added to:
  - Purchase Credit Memo
  - Purchase Return Order
- **Purchase Line Approval Limit** and **Unlimited Purchase Line Approver** setup was added to the **Approval User Setup**.
- Single Approver Power Automate Flow template added to Power Automate Flow Templates so administrators can deploye the solution to the Power Automate.
- **Power Automate Flow Extended Setup** (available from Power Automate Flow) enabled.
  - New setup fields to define behaviour for nonapproved documents and printing **Purchase Order Print Conditions** and **Purchase Return Order Print Conditions**.
- Tracked Power Automate Fields have a new options to define purchase document types to which the tolerances applies to.
- Document Dimensions enabled as additional tracked table for purchase line approval flow.
- Implemented logic to transfer PA Entries to Posted PA Entries when the document is posted.
- Added validation logic to posting process that verifies that the document is approved.
- Line Approval status is now transferred to purchase archive.
- API Changes
  - New API: Purchase Line Limits API
  - Purchase Lines API
    - All Document Line Dimensions (Value and Name) added, dimension1ValueCode - dimension8ValueCode, dimension1ValueName - dimension8ValueName
    - Additional fields available: projectNo, projectTaskNo, lineAmount
  - Purchase Headers API
    - Additional fields available: amount, amountIncludingVat

### Fixes
- Issue when the non-enabled records still caused the whole document to reopen.
- Fix of the issue that caused that PA Entries remained in the system even when the source document (or line) was deleted.

### Obsoleted Functionality (will be removed in 26.0)
- Actions to open Power Automate Log entries and Last Power Automate flow in Purchase Invoice and Purchase Order header. These actions are now available only on the line level.

## [1.1.0.1] - 2024-07-31
  
Available version: 23.0+

First App-Source version
