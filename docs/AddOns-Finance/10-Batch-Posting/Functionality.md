---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Functionality

## Send documents from Batch Post Tasks

Batch Post Tasks (**Batch Post Sales Invoices**, **Batch Post Sales Orders**, **Batch Post Sales Credit Memos**, **Batch Post Sales Return Orders**) have a new option **Send by Email**. If this option is active, the system tries to send the posted document (only invoice/credit memo, not shipment/receipt) based on the specified **Document Seding Profile** for customers associated with the posted document. If the field is empty, the **Default for Batch Posting** posting profile is used.

**Document Sending Profile** must have all options set to **No**, except the **Emails** that must be set to **Yes (Use Default Settings)**.

## Generate Recurring Invoices using the job queue

There is a new report, **Create Recurring Sales Invoices with Advanced Setup** (could be searched), that is based on the standard report **Create Recurring Sales Invoices** but has more options:

- **Post Invoices**
  - Specifies whether the generated documents should be automatically posted.
  - If this field is checked and the posting fails, the document will be generated and stored in open invoices.
- **Send Invoices**
  - Specifies whether the posted invoices should be sent by email.
  - If this field is checked, the customer must have an empty **Document Sending Profile** or must have **Document Sending Profile** set to **E-Mail: Yes (Use Default Settings)**. If a customer has a different sending profile, the document will be posted, but the email will fail and will be marked as failed in job queue entries.
- **Create Date**
  - Specifies the first date when the invoice should be generated. If you run a report manually, this field must be set to your Work Date; otherwise, the report will not generate anything.
  - If the report is run using the job queue, the invoice will be generated on this day.
- **Repeat Every**
  - Specifies how the next create date should be calculated. 
  - This formula must be positive. This field is used whenever the **Create Date** is in the past. The system will apply the formula to the **Create Date** value; if the value is still in the past, it will apply the formula until it reaches the current Work Date or is in the future.
- **Posting/Order Date Calculation Formula**
  - This formula specifies how the next Posting Date and Order Date should be calculated.
  - This formula is applied as many times as the **Repeat Every** formula was applied until it reaches the current Work Date. For this reason, it is important to set both date formulas to the same period (= regardless of how many times the formula is applied to both fields, calculated dates still have the same difference as for the first calculation).

Furthermore, the system will not allow generating two invoices for one combination of Customer/Standard Code/Posting Date/Order date.
