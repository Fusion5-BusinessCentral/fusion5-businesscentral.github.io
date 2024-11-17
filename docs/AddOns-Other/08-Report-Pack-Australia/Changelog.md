---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
 
## [3.5.0.1] - 2024-11-10
  
Available version: 24.0+

### Fixes
- **Remittance Advice - Entries** did not show the logo if multiple documents for the same vendor were printed.

### Changes
- **General Ledger Entries** now have Global and Shortcut Dimension Names (by default, only Codes are available).
- New columns in **Remittance Advice - Entries** report
  - FS5A08OurAccountNo

## [3.4.0] - 2024-10-17
  
Available version: 24.0+

### Changes
- New function in **FS5A08 Format Document** - BlankIfZero() with Text, Decimal overloads. 
- New columns in **Standard Sales - Order Confirmation** and **Standard Sales - Quote** reports
  - FS5A08RequestedDeliveryDate
  - FS5A08CreatedBy
  - FS5A08PaymentTermsCode

## [3.3.0] - 2024-10-08
  
Available version: 24.0+

### Fixes
- One column in the Sales Order Confirmation layout shows the internal code, not the value.

## [3.2.0] - 2024-10-08
  
Internal Release

## [3.1.0] - 2024-08-23
  
Available version: 24.0+

### Changes
- Added support for trading names in **Remittance Advice - Entries**
- New columns in **Remittance Advice - Entries** report
  - FS5A08TradingNameCode
- New columns in **Standard Purchase - Order** report
  - FS5A08VendorPhoneNo
- New columns in **Standard Sales - Invoice** report
  - FS5A08PaymentTermsCode
- Format function in reports to get user full name returns now the **User Name** when the **Full Name** is blank.
- Internal changes to support multiple licensing levels in this extension (basic and warehouse).

## [3.0.0] - 2024-05-10
  
Available version: 24.0+

### Changes
- Fusion5 report layout captions now use **Document Pack - Australia** instead of **Report Pack - Australia**.
- FS5A08TradingNameCode in Standard Purchase - Order, Purchase - Return Shipment, Customer Statement (Fusion5), Customer - Payment Receipt (Fusion5), Standard Statement, Standard Sales - Credit Memo, Standard Sales - Draft Invoice, Standard Sales - Invoice, Standard Sales - Order Conf., Standard Sales - Pro Forma Inv, Standard Sales - Quote, Standard Sales - Shipment
- FS5A08ExternalDocNo_DtldCustLedgEntries, FS5A08ExternalDocNo_CustLedgEntry2 in Standard Statement
- New Fusion5 layout 
  - Transfer Order

## [2.4.0.1] - 2024-05-10
  
Available version: 23.0+

### Changes
- Refactoring to meet updated Fusion5 programming standards.
- FS5A08TransferOrderNo, FS5A08TransferOrderDate, FS5A08CreatedBy in Transfer Shipment report.
- FS5A08ShipmentDate, FS5A08CreatedBy in Transfer Order report.
- FS5A08SelltoEmail, FS5A08PromisedDeliveryDate, FS5A08RequestedDeliveryDate, FS5A08CreatedBy, FS5A08CompanyFax, FS5A08GenProdPostingGroup, FS5A08VATProdPostingGroup in Standard Sales - Shipment report.
- FS5A08SelltoEmail, FS5A08CompanyFax, FS5A08CompanySwiftCode, FS5A08GenProdPostingGroup, FS5A08VATProdPostingGroup in Standard Sales - Quote, Standard Sales - Order Conf., Standard Sales - Invoice, Standard Sales - Draft Invoice  reports.
- FS5A08SelltoEmail, FS5A08CompanyFax, FS5A08GenProdPostingGroup, FS5A08VATProdPostingGroup in Standard Sales - Pro Forma Inv, Standard Sales - Credit Memo reports.
- FS5A08CustomerEmail, FS5A08CompanyFax, FS5A08CustomerPayTermsCode, FS5A08CustomerPayTermsDesc, FS5A08DocType_DtldCustLedgEntries, FS5A08DocType_CustLedgEntry2 in Standard Statement
- CustomerEmail in Standard Statement
- CustomerEmail, CustomerPhoneNo in Customer Statement (Fusion5)

### Obsoleted Functionality (will be removed in 26.0)
- There are no obsoleted functions from the user's perspective.
- Obsoleted functions/objects:
  - codeunit 71697662 "FS5A08 Install Mgt." (will be set as internal)
  - codeunit 71697668 "FS5A08 Upgrade" (will be set as internal)

## [2.3.0] - 2024-05-10
  
Available version: 23.0+

### Changes
- FS5A08CompanyEFTBSBNo added to Standard Statement
- FS5A08SellToPhoneNo added to Standard Sales - Quote, Order Confirmation, Draft Invoice, Pro Forma Inv, Shipment, Invoice, Credit Memo, Standard Statement, Customer Payment Receipt, Remittance Advice - Entries
- FS5A08VendorBankAccountName, FS5A08VendorBankAccountNo, FS5A08VendorEFTBSBNo added to Remittance Advice - Entries
- Trading Name is now stored to archived document when the document is archived.

## [2.2.0] - 2024-04-05
  
Available version: 23.0+

### Changes
- AddOn was renamed from "Report Pack - Australia" to "Document Pack (Australia)
- ABN in all custom reports is now formatted: "XX XXX XXX XXX"

### Fixes
- Company Bank Branch No. is not printed correctly in custom reports

## [2.1.0.1] - 2024-03-29
  
Available version: 23.0+

### Fixes
- Hotfix for Customer Payment Receipt layout that generated additional blank page.

## [2.1.0] - 2024-03-28
  
Available version: 23.0+

### Changes
- New Fusion5 layouts
  - Standard Statement
  - Standard Sales - Draft Invoice
  - Standard Sales - Pro Forma Invoice
- Support for Trading Names
  - Standard Statement
  - Standard Sales - Draft Invoice
  - Standard Sales - Pro Forma Invoice
- "Total" fields in our layouts now have "GST" instead of "Tax"
- Internal redesign for all custom report layouts to use predefined Word styles

### Compatibility
- Preparation for v27 Home Page field change from 80 to 255 characters.

## [2.0.0] - 2023-12-15
  
Available version: 23.0+

### Changes
- Trading Names functionality
- Trading Names support for the following reports:
  - Standard Purchase - Order
  - Standard Sales - Credit Memo
  - Standard Sales - Invoice
  - Standard Sales - Order Confirmation
  - Standard Sales - Quote
  - Standard Sales - Shipment
  - Customer - Payment Receipt (Fusion5)
  - Customer Statement (Fusion5)

## [1.6.0] - 2023-11-20
  
Available version: 22.0+

### Changes
- New custom layouts
  - Purchase - Return Shipment
  - Transfer Shipment
- Copy Document Comment Lines Functionality
- FS5A08LineNetWeight column available for Sales - Standard Shipment

## [1.5.0] - 2023-11-15
  
Available version: 22.0+

### Changes
- FS5A08LineDiscountAmount column available for Sales Quote, Order, Posted Invoice and Posted Credit Note reports.
- FS5A08TaxAmount formatted.
- Licensing changes.

## [1.4.0] - 2023-10-28
  
Available version: 22.0+

First App-Source version
