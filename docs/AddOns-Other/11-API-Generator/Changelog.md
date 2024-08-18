---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.

## [1.3.0] - 2024-08-12
  
Available version: 24.0+

### Changes
- API Generator table is automatically initialized when a new company is created incl. Extension ID and initial version number.

### Fixes
- Generated app.json file has always **runtime** specified.
- **API Generator Table Field** now has properly defined lookup/drilldown pages.
- Links to licensing/support pages fixed.

## [1.2.0.1] - 2024-03-12
  
Available version: 23.0+

### Changes
- Add multiple fields to the API page at once.
- Limit fields that can be added to the API page:
  - Fields with ObsoleteState = Removed are not allowed.
  - Fields with the following data types are not allowed: Binary, BLOB, Media, MediaSet, OemCode, OemText, RecordID, TableFilter
- Show API URL in API Generator Tables in BC.
- Improved description of steps to check the deployement status.

### Fixes
- Do not generate SourceTableView if the defined table relation has no lines.
- Do not generate fields with ObsoleteStatus = Removed even if they are defined in the field list.
- Fix for SystemId field, which has "$SystemId" name in the background.

## [1.1.0] - 2023-12-18
  
Available version: 22.0+

First App-Source version
