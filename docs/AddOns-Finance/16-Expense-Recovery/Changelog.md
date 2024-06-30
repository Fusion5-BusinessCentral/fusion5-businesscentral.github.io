---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
   
## [1.4.0] - 2024-06-28
  
Available version: 23.0+

### Changes
- Expense Recovery Lines now can be processed even if there are existing errors. The error lines are automatically skipped, and users must fix the error before processing.
- Optimalization for expense recovery line validation – change company only if the current company is different from the target company.

### Fixes
- Fix for the issue that showed confirmation dialog to run expense recovery lines validation even if there are no lines.
- Fix for the issue that caused “Posting Description” field to contain wrong value in generated sales document.

### Extensibility Improvements
- New events
  - OnCreateSalesHeaderAfterInsertSalesHeader(var SalesHeader: Record "Sales Header"; ExpRecoveryLine: Record "FS5A16 Exp. Recovery Line")
  - OnGenerateSalesDocumentsFromExpenseRecoveryLinesBeforeCreateFirstSalesDocument(var ExpRecoveryLine: Record "FS5A16 Exp. Recovery Line")
  - OnBeforeIsTargetCompany(ExpenseRecoverySetup: Record "FS5A16 Expense Recovery Setup"; var Result: Boolean; var IsHandled: Boolean)
  - OnBeforeIsSourceCompany(ExpenseRecoverySetup: Record "FS5A16 Expense Recovery Setup"; var Result: Boolean; var IsHandled: Boolean)
- New parameters in OnCreateSalesHeaderAfterSetFilters publisher
  - var ForceNewSalesHeader: Boolean; 
  - var IsHandled: Boolean

## [1.3.0] - 2024-05-10
  
Available version: 23.0+

### Extensibility Improvements
- New Events
  - OnAfterCreateSalesDocument(Record "FS5A16 Exp. Recovery Line"; var Record "Sales Header"; var Record "Sales Line")
- New Event Parameters
  - OnCreateSalesDocumentBeforeCreateSalesHeader - Record "FS5A16 Exp. Recovery Line"

## [1.2.0.1] - 2024-04-21
  
Available version: 23.0+

### Changes
- New action to open **Processed Lines** from **Expense Recovery Worksheet**.
- **Processed Expense Recovery Lines** now contains number from created sales document, information whether the document is posted and posted invoice number (applies only to companies with **Company Type** = Target or Both).

## [1.1.0] - 2024-04-08
  
Available version: 23.0+

First App-Source version
