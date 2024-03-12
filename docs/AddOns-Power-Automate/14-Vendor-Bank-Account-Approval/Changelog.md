---
sidebar_position: 3
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
 
## [1.1.0.1] - 2024-03-12
  
Available version: 23.0+

Changes
- Added support for **Record Limits** and **Tracked Fields** (see [Pack for Power Automate](../07-Pack-for-Power-Automate/Functionality.md) for more details).
  - When the flow is enabled, all flow is active for all records.
  - When the flow is enabled, the following fields are tracked:
    - SWIFT Code
    - IBAN
    - Bank Account No.
    - Bank Branch No.
    - BSB (if exists, AU/NZ localization only)
- The action to send the Vendor Bank Account for approval is visible only if the record is within records with the enabled flow.
- The Approval Status is blank if the record is not within records with the enabled flow.

## [1.0.0] - 2024-02-04
  
Available version: 23.0+

First App-Source version based on our legacy Pack for Power Automate
