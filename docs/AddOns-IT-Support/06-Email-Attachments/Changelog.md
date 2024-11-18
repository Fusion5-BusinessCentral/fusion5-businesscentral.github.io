---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
  
## [2.0.0] - 2024-10-22

Available version: 25.0+

### Changes
- Added support for v25 document attachments (attach multiple documents) to Customer and Vendor Ledger Entries.
- New field in **Purchases & Payables Setup**
  - **Include Invoice Attachments in Remittance Advice**
    - When enabled, system automatically attaches PDF invoices when sending remittance advice.

### Extensibility
- New event **OnAfterAttachDocuments** in codeunit 71697775 "FS5A06 Email Attach. Mgt.".

### Obsoleted Functionality (will be removed in 27.0)
- Old pre-v25 document attachment factboxes will be removed from customer and vendor ledger entries in v27. In this release, they are set to visible = false.

## [1.2.1] - 2023-12-12

Available version: 22.2+

### Changes
- Hotfix for Vendor Ledger Entries attachment factbox.
- Attachment actions in Vendor and Customer Ledger Entries.

## [1.2.0] - 2023-12-11
  
Available version: 22.2+

### Changes
- Document Attachments for Customer and Vendor Ledger Entries
- Copy document attachments from sales/purchase document to customer/vendor ledger entries automatically during posting

## [1.1.0] - 2023-12-07
  
Available version: 22.0+

First App-Source version
