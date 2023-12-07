---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Functionality

InterCompany Pack enhance standard InterCompany processes and Master Data Synchronization functionality.

## Limit changes in Child company

Often some fields or even tables should be managed from the parent company only. For this purpose, companies use the functionality of Master Data Synchronization. However, the standard functionality does not allow set tables or fields which can not be changed directly in child company.

The synch. job that propagate changes from the parent company is excluded from these checks.

## Setup

Two new pages (accessible using the search engine)

- **Master Data Blocked Records**
  - This setup allows to block all insertion, modification or deletion of whole records.
- **Master Data Blocked Fields**
  - Blocked fields allow to specify combinations of tables/fields that can't be changed by any way except the master data synchronization job queue.
  - The validation is done once user leaves the record and the change should be written to database, not when user change the field.
  - Do not overuse this functionality. Be aware that no user, job or background task (except the Master Data Synch) can change these fields. If you block field that needs to be updated from another field, you can block the whole process.
