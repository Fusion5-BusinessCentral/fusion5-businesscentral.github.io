---
sidebar_position: 3
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
 
## [2.1.0.0] - 2024-01-31
  
Available version: 23.0+

### Changes
- "Table Relations" now contains information about the extension from which the relation comes (if an extension created the relation).
- New codeunit 71697637 "FS5A03 Table Relation Mgt.", a facade for creating table relation programmatically from another extension.
  - CreateTableRelation(Code: Code[20]; SourceTableNo: Integer; TargetTableNo: Integer) TableRelation: Record "FS5A03 Table Relation"
  - CreateTableRelationLineFilter(TableRelation: Record "FS5A03 Table Relation"; TargetFieldNo: Integer; TargetFieldFilter: Text[100])
  - CreateTableRelationLineField(TableRelation: Record "FS5A03 Table Relation"; TargetFieldNo: Integer; SourceFieldNo: Integer)

### Fixes
- Fix for "FS5A03 Big Text Editor" addin for older browsers

## [2.0.0.0] - 2024-01-24
  
Available version: 23.0+

### Changes
- Page 71697637 "FS5A03 Big Text Editor"
- Internal changes for BC 2023 wave 2 (namespaces, minor refactoring)

## [1.4.0.0] - 2023-12-18
  
Available version: 22.2+

### Changes
- Table Relation functuonality

### Fixes
- REST Authentication: Remove applied filters when new record is created (otherwise the new record can dissapear if not within filter conditions)

## [1.3.0.0] - 2023-10-27
  
Available version: 22.2+

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