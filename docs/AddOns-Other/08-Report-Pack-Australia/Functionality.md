---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Functionality

## Send Customer Payment Receipt

A new action **Send Customer Payment Receipt** in **Customer Ledger Entries** allows sending configured Customer Payment Receipt. The process uses the standard email functionality with a custom email scenario.

## Copy Document Comment Lines

Copy documents functionality for sales and purchase documents has been extended by the "Include Comments" option. If this option is active, the document is copied, including records in "Sales Comment Line" and "Purchase Comment Line".

## Trading Names


The following reports support trading name functionality:
- Standard Purchase - Order
- Standard Sales - Credit Memo
- Standard Sales - Invoice
- Standard Sales - Order Confirmation
- Standard Sales - Quote
- Standard Sales - Shipment
- Customer - Payment Receipt (Fusion5)
- Customer Statement (Fusion5)

## New Reports

- Customer Statement (Fusion5), report 71697660
  - Copy of 17110 "AU/NZ Statement"
  - Restructured, refactored, and updated for Word layouts.

- Customer - Payment Receipt (Fusion5), report 71697661
  - Copy of receipt from GB/US localization
  - Restructured, refactored, and updated specifically for Word layouts.

## Extended Reports

The following reports have custom fields and data items available, so even when our custom report layouts do not have all values you require, there is a chance the field is still available and you need only to update the custom layout!

### Sales

- Standard Sales - Quote
- Standard Sales - Order Confirmation
- Standard Sales - Invoice
- Standard Sales - Shipment
- Standard Sales - Credit Memo

### Purchase

- Standard Purchase - Order
- Purchase - Return Shipment
- Remittance Advice - Entries

### Inventory

- Transfer Shipment

## Custom Report Layouts

The following reports have custom layout(s) specifically made for Australia.

### Sales

- Standard Sales - Quote
- Standard Sales - Order Confirmation
- Standard Sales - Invoice
- Standard Sales - Shipment
- Standard Sales - Credit Memo
- Customer Statement (Fusion5)
- Customer - Payment Receipt (Fusion5)

### Purchase

- Standard Purchase - Order
- Purchase - Return Shipment
- Remittance Advice - Entries

### Inventory

- Transfer Shipment

## Setup

New setup table **Report Setup**
- **Replace Report 17110 "AU/NZ Statement"**
  - If active, whenever the system calls report 17110, our report 71697660 is used instead (users can still use the OOTB actions)
- **Replace Report 211 "Customer - Payment Receipt**
  - If active, whenever the system calls report 211, our report 71697661 is used instead (users can still use the OOTB actions)

**Company Information** has new fields
- **Picture 2**
  - Allows to add an additional picture/logo to reports that have this field available

**Report Selection - Sales** has a new option
- **Customer - Payment Receipt**
  - Allows to specify reports that should be printed when **Send Customer Payment Receipt** action is used in **Customer Ledger Entries**. The default report is **211, Customer - Payment Receipt**.
