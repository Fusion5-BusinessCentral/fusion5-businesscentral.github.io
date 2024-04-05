---
sidebar_position: 3
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.

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
