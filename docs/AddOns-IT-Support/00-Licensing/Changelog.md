---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
    
## [2500.3.20250511.120915] - 2025-05-11

Available version: 25.0+

### Changes
- Improvements to Fusion5 telemetry module to log more details about the source extension.

## [4.2.20250401.52214] - 2025-04-01

Available version: 25.0+

### Changes
- Missing FieldGroups added to the most of the tables.
- Added a new module for managing Fusion5 telemetry events.

## [4.1.0] - 2025-01-17

Available version: 25.0+

### Changes
- Documentation for developers (param & return value) improved in the Licensing Management codeunit.

### Fixes
- License Validation is now called only when the ExecutionContext is Normal (skipping license validation during installation and upgrades). This fix resolves issues with standard Microsoft updates that ended with licensing error.

## [4.0.0] - 2024-12-04

Available version: 25.0+

### Changes
- Minor refactoring of validation logic.
- **TenantId** is no longer validated in sandbox environments. The **TenantGuid** is still validated in all online environments. After this change, the license created using the production environment information will be valid in all sandbox environment within the same tenant (TenantId is environment-specific).

### Fixes
- Commit() in the license notification is used only if the transaction type before the notification change was read. If the notification change was invoked from update transaction, the commit is no longer called.

## [3.4.0] - 2024-10-11

Available version: 24.0+

### Changes
- Improvements to the License Validation Job Queue to run the validation only if needed
  - The extension is still installed in the environment.
  - The extension is still valid (the start date is before Today and the end date is after today)
  - The extension requires a license for Sandbox, and the current environment is a sandbox environment.
- Improvements to custom telemetry for LogTelemetryForLicenseVerificationUnsuccessful.

## [3.3.0.1] - 2024-10-01

Available version: 24.0+

### Fixes
- Fixed issue when **My Notification** error for sandbox license notification is not created, and this notification should be shown in active transaction causing RunModal error.

### Changes
- Final refactoring to follow changes in v24 suggested by LinterCop.
- A custom telemetry signal was added to unsuccessful license validation to obtain more details about the issue, including cases where only a warning is shown.
- Permissions improvements
  - New permission set **Licensing-Use**
  - Extended permission sets
    - **D365 BASIC** & **D365 READ** include **Licensing-Use** automatically

## [3.2.0.1] - 2024-09-26

Available version: 24.0+

### Changes
- New custom dimensions for telemetry signal for parent/child and bundled licenses to have more details about newly registered/unregistered licenses.
- New procedure **RemovePermanentLicense(..)** in codeunit 71697595 "FS5 Licensing Management" to be able to remove permanent license.
- New procedure **RemoveChildExtensionFromBundle(..)** in codeunit 71697595 "FS5 Licensing Management" to be able to parent/child license.

## [3.1.0] - 2024-09-19

Available version: 24.0+

### Changes
- Refactoring to hide error implementation by adding a facade.
- New procedure **GetActiveLicenseLevel(..)** in codeunit 71697595 "FS5 Licensing Management" to get the active license level of the extension.
- The job queue for license verification changed to use TryFunction to prevent job queue failures in case of unlicensed extension.

## [3.0.0] - 2024-08-13

Available version: 24.0+

### Changes
- Refactoring to meet updated Fusion5 programming standards.
- Added logic and action to hide the notification about the sandbox license whenever the system tries to verify the license in a sandbox environment for an extension that does not require a license for sandbox environments.
- A telemetry notification for unsuccessful license verification notifications was added.
- The licensing logic for the number of companies has been changed to calculate all companies in the environment except evaluation companies.
- Added a Job Queue Task that verifies all licenses once a day (if they have not been verified for 4 days). This job queue is configured automatically and is reconfigured/restarted whenever a user with proper permissions opens the company.

### Fixes
- Fix the issue if the user does not have permission to access the first company in the database

### Obsoleted Functionality (will be removed in 26.0)
- There are no obsoleted functions from the user's perspective.
- Obsoleted functions/objects:
  - 71697598 "FS5 License-Install Mgt." (will be set as internal)

## [2.10.0] - 2024-05-12

Available version: 23.0+

### Fixes
- Fix for the issue causing problems with installing extensions that have inactive permanent licenses.

## [2.9.0] - 2024-05-10

Available version: 23.0+

### Changes
- Only the following license plans are included in user limit (for extension licensed using per user model)
  - Premium Plan
  - Premium ISV (Embedded) Plan
  - Essential Plan
  - Essential ISV (Embedded) Plan
  - Essential Attached Plan

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
