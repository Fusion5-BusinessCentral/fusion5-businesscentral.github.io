---
sidebar_position: 3
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
 
## [2.3.0] - 2024-03-04

Available version: 23.0+

Changes
- New action "Refresh License" in "Existing Licenses" to force update BC license details (for example to force update the license after it was upgraded to higher license level).
- Change how the active users are counted
  - For OnPrem, all users with State = Enabled are considered as active.
  - For Cloud, only users with specific plans are considered as active. If the user has only one or more of the following plans, it is not counted towards the limit.
    - Global Admin
    - D365 Admin
    - D365 Admin Partner
    - Delegated Admin
    - Helpdesk
    - Accountant Hub
    - Microsoft 365
- SecretText uptake preparation for v24 release.

## [2.2.0] - 2023-12-07

Available version: 23.0+

Changes
- New overload for RegisterExtension() procedure to allow registration without any supporting documents (email, documentation, licensing guidelines).
- Email is no longer mandatory to register new extensions.
- New procedure UpdateExtensionRegistration(). Use this procedure to change registered email, documentation URL or licensing guidelines URL.

## [2.1.0] - 2023-11-20

Available version: 23.0+

Changes
- New procedure UnregisterExtension() in LicensingManagement codeunit. Use this procedure to remove registration of the extension from the licensing module.

## [2.0.0] - 2023-11-11
  
Available version: 23.0+

Internal release for BC 2023 wave 2 (namespaces, minor refactoring)

## [1.12.0] - 2023-10-27
  
Available version: 22.0+

First App-Source version
