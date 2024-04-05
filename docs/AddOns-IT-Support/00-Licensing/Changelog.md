---
sidebar_position: 3
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
 
## [2.8.0] - 2024-03-28

Available version: 23.0+

### Changes
- New action **Recalculate Stamps** in **Licensable Extensions**. The action is useful if the stamps are not synced correctly.

## [2.7.0] - 2024-03-27

Available version: 23.0+

### Changes
- Improved telemetry notifications, new custom dimensions for the following signals:
  - FS5000-001c (SecurityStampsMissmatchError): FieldTableName, StoredValue, CalculatedValue
  - FS5000-002e (TooManyCompaniesError): AllowedNumber, CurrentNumber
  - FS5000-002c (LicenseNotVerifiedForTooLongError): LastVerificationDate, LastSuccessfulVerificationDate
  - FS5000-003e (TooManyUsersError): AllowedNumber, CurrentNumber
- New Telemetry Signals:
  - LogUsage('FS5000-017n', 'Licensing', ''The security stamps for "%1" by %2 (for %3) were recalculated. New value is %4.', CustomDimensions), Custom Dimensions: ExtensionName, FieldTableName, StoredHash

## [2.6.0] - 2024-03-21

Available version: 23.0+

### Changes
- Improved telemetry notifications by adding LastErrorCallStack() and LastErrorText()

### Fixes
- LicenseNotVerifiedForTooLongError is shown even when the license was recently verified.

## [2.5.0] - 2024-03-19

Available version: 23.0+

### Changes
- Fusion5 telemetry logger was moved from A02 IT Pack to A00 Licensing.

## [2.4.0.1] - 2024-03-13

Available version: 23.0+

### Changes
- Overview in **Licensable Extensions** to show additional info: Has Paid License, Paid License Valid From, Paid License Valid To
- New overload for RegisterExtension procedure with (DocumentationURL: Text[250]; LicensingURL: Text[250]) parameters.
- Support bundle licenses for extensions that have not yet been installed.
  - Before this change, bundle licenses could only be added when the licensed child extension was installed in the environment.
  - After this change, if the extension is not installed in the environment, the bundle license is stored in the **Inactive License Bundle** table until the extension is installed. The verification for bundle passwords and other conditions is done during the extension installation.
- New Telemetry Signals
  - LogUsage('FS5000-014n', 'Licensing', 'Inactive Parent-Child link created.')
  - LogUsage('FS5000-015n', 'Licensing', 'Inactive Parent-Child link already exists.')
  - LogUsage('FS5000-016n', 'Licensing', 'Inactive Parent-Child removed.')

### Fix
- License details are no longer shown when the license conditions are verified.

## [2.3.0] - 2024-03-04

Available version: 23.0+

### Changes
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

### Changes
- New overload for RegisterExtension() procedure to allow registration without any supporting documents (email, documentation, licensing guidelines).
- Email is no longer mandatory to register new extensions.
- New procedure UpdateExtensionRegistration(). Use this procedure to change registered email, documentation URL or licensing guidelines URL.

## [2.1.0] - 2023-11-20

Available version: 23.0+

### Changes
- New procedure UnregisterExtension() in LicensingManagement codeunit. Use this procedure to remove registration of the extension from the licensing module.

## [2.0.0] - 2023-11-11
  
Available version: 23.0+

Internal release for BC 2023 wave 2 (namespaces, minor refactoring)

## [1.12.0] - 2023-10-27
  
Available version: 22.0+

First App-Source version
