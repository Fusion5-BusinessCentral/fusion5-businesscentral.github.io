---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Functionality

## New supported fields for synchronization

### Customer -- CRM Account

New fields supported for Customer/Account synchronization:
- Available Credit Limit (to CE only)
- Available Credit Limit LCY (to CE only)
- Blocked
- Customer Posting Group (custom CE table)
- Country (custom CE table)
- Payment Terms (custom CE table)

### Vendor -- CRM Account

New fields supported for Vendor/Account synchronization:
- Blocked
- Vendor Posting Group (custom CE table)
- Country (custom CE table)
- Payment Terms (custom CE table)

### Item -- CRM Product

New fields supported for Item/Product synchronization:
- Item Category (custom CE table)
- General Product Posting Group (custom CE table)
- Inventory Posting Group (custom CE table)

### Sales Order -- CRM Order

New fields supported for Sales Order/Order synchronization:
- Prepayment (%)
- Bill-to Customer
- Bill to Country
- Ship to Country
- Payment Schedule (extra large text field)
- Payment Terms (custom CE table)

### Posted Sales Invoice -- CRM Invoice

New fields supported for Posted Sales Invoice/Invoice synchronization:
- Remaining Amount (to CE only)
- Bill-to Customer
- Bill-to Country
- Payment Terms (custom CE table)

## New supported tables for synchronization

### Country/Region -- CRM Country (custom table)

A new custom table in D365 Sales for countries. By default, this table is synchronized From BC (records are created from BC). Using this table, you will never again see the most common issue in standard synchronization, where the country is plain text in D365 Sales.

Fields
- Code
- Description

### Payment Terms -- CRM Payment Terms (custom table)

A new custom table in D365 Sales for payment terms. By default, this table is synchronized from BC (records are created from BC). Using this table, you can define (on the user-level) values available in D365 Sales. In standard synchronization, the payment terms are a fixed list of values.

Fields
- Code
- Description

### Item Category -- CRM Product Category (custom table)

A new custom table in D365 Sales for product categories. By default, this table is synchronized from BC (records are created from BC).

Fields
- Code
- Parent Category
- Description

### Customer Posting Group -- Customer Posting Group (custom table)

A new custom table in D365 Sales for customer posting groups. By default, this table is synchronized from BC (records are created from BC).

Fields
- Code
- Description

### Vendor Posting Group -- Vendor Posting Group (custom table)

A new custom table in D365 Sales for vendor posting groups. By default, this table is synchronized from BC (records are created from BC).

Fields
- Code
- Description

### Inventory Posting Group -- Inventory Posting Group (custom table)

A new custom table in D365 Sales for inventory posting groups. By default, this table is synchronized from BC (records are created from BC).

Fields
- Code
- Description

### General Product Posting Group -- General Product Posting Group (custom table)

A new custom table in D365 Sales for general product posting groups. By default, this table is synchronized from BC (records are created from BC).

Fields
- Code
- Description

### General Business Posting Group -- General Business Posting Group (custom table)

A new custom table in D365 Sales for general business posting groups. By default, this table is synchronized from BC (records are created from BC).

Fields
- Code
- Description

## Read API 

The addon contains additional custom API pages to support additional requirements for D365 Sales integration (using Power Automate or other tools).

All API pages has publisher = **fusion5**, group = **crm**.

- postedSalesInvoice / postedSalesInvoices (v1.0)
  - Contains custom bind action: Send(recipientEmails: Text[250])
- customersCreditLimit / customersCreditLimits (v1.0)

## Setup

New entities and additional fields in D365 Sales integration can be configured using the same configuration table (**Integration Table Mapping**) as standard entities.

### Microsoft Dynamics 365 Connection Setup

New setup fields:
- **Use Fusion5 Payment Terms**
  - Specifies that Fusion5 Payment Terms mapping should be used instead of standard mapping. Fusion5 mapping is based on table2table relation (D365 CE custom table and D365 BC standard table). The standard mapping is picklist2table with hardcoded values in D365 CE.
- **Do not Check Customer Type**
  - If enabled, the standard check of **Relationship Type** (**customertypecode**) CRM field is skipped. 
- **Sync CRM Invoice Remaining Amount**
  - Specify whether the remaining amount of the posted invoice should be synchronized from Business Central to D365 Sales. The synchronization of the remaining invoice amount is handled by codeunit 5350 **CRM Statistics Job** and the OOTB invoice status update.
- **Customer Available Credit Update Enabled**
  - Specifies whether customer available (remaining) credit should be synchronized. A job queue with codeunit 71697894 handles the synchronization of available credit **FS5B01 CRM Customer Credit Job** that is automatically created when this setup field is enabled.
- **Post Integrated Sales Orders**
  When enabled, the system automatically creates a job queue with report 71697885 **Post CRM Sales Orders**. This job automatically posts all synchronized sales orders once all lines are synchronized from D365 Sales to Business Central. If an order contains any synchronization errors (at the line or header level), it is not posted. 
- **Send Posted Sales Orders**
  - When enabled, the sales invoice is automatically sent by the job queue 71697885 **Post CRM Sales Orders**. This applies only to invoices posted by automated job queues.

### Sales & Receivables Setup

Contains two new fields: **Default Domestic Gen. Business Posting Group** and **Default Foreign Gen. Business Posting Group**. If these fields are not blank, the value is used whenever a new customer is created based on a defined country/region code.

### Purchases & Payables Setup

Contains two new fields: **Default Domestic Gen. Business Posting Group** and **Default Foreign Gen. Business Posting Group**. If these fields are not blank, the value is used whenever a new vendor is created based on a defined country/region code.
