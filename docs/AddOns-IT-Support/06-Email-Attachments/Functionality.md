---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Functionality

This extension allows you to attach document attachments to emails sent from Business Central automatically. Only marked attachments are attached to the email. To mark an attachment, go to **Document Attachment Details** (the page where you can attach attachments) and set **Attach to Emails** to Yes.

With this addon, you can also add attachments to Customer and Vendor Ledger Entries. It is also possible to automatically copy document attachments from unposted documents (sales and purchase) to customer and vendor ledger entries.

## Setup

New field in **Sales & Receivables Setup** (**Purchases & Payables Setup**)
- **Copy Doc. Attachments to Customer Ledger Entries** (**Copy Doc. Attachments to Vendor Ledger Entries**)
  - Specifies whether document attachments should be automatically copied to customer/vendor ledger entries when the source document is posted. 
  - The default value is false (= documents are copied to posted document only).

Two new fields in **General Ledger Setup**, tab **Email Attachments**

- **Max no. of Email Attachments**
  - Specifies the maximal number of attachments that can be attached to any email. This limit is applied to attachments attached by this extension; attachments from other extensions or generated documents are not limited and do not count towards this limit
- **Action When Limit Reached**
  - Specifies what should happen when the limit is reached
    - (blank): no warning, no error
    - warning: users are warned that there are more attachments. Not all attachments will be attached.
    - error: users won't be able to send any email if it contains more attachments
