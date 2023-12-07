---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Functionality

InterCompany Pack enhance standard InterCompany processes and Master Data Synchronization functionality.

## Limit changes in Child Company

Some fields or tables should often be managed only by the parent company. For this purpose, companies use the functionality of Master Data Synchronization. However, the standard functionality does not allow set tables or fields that can not be changed directly in the child company.

The synchronization job that propagates changes from the parent company is excluded from these checks.

## Setup

Two new pages (accessible using the search engine)

- **Master Data Blocked Records**
  - This setup blocks all insertion, modification or deletion of whole records.
- **Master Data Blocked Fields**
  - Blocked fields allow the specification of combinations of tables/fields that can't be changed in any way except the master data synchronization job queue.
  - The validation is done once the user leaves the record, and the change should be written to the database, not when the user changes the field.
  - Do not overuse this functionality. Be aware that no user, job or background task (except the Master Data Synch) can change these fields. If you block a field that needs to be updated from another field, you can block the whole process.
