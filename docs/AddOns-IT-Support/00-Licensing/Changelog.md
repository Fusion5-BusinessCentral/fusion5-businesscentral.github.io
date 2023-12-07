---
sidebar_position: 3
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
 
## [2.2.0] - 2023-12-07

Changes
- New overload for RegisterExtension() procedure to allow registration without any supporting documents (email, documentation, licensing guidelines).
- Email is no longer mandatory to register new extensions.
- New procedure UpdateExtensionRegistration(). Use this procedure to change registered email, documentation URL or licensing guidelines URL.

## [2.1.0] - 2023-11-20

Changes
- New procedure UnregisterExtension() in LicensingManagement codeunit. Use this procedure to remove registration of the extension from the licensing module.

## [2.0.0] - 2023-11-11
  
Internal release for BC 2023 wave 2 (namespaces, minor refactoring)

## [1.12.0] - 2023-10-27
  
First App-Source version

<!--  
### Added
 
### Changed
  
- [PROJECTNAME-ZZZZ](http://tickets.projectname.com/browse/PROJECTNAME-ZZZZ)
  PATCH Drupal.org is now used for composer.
 
### Fixed
 
- [PROJECTNAME-TTTT](http://tickets.projectname.com/browse/PROJECTNAME-TTTT)
  PATCH Add logic to runsheet teaser delete to delete corresponding
  schedule cards.
-->