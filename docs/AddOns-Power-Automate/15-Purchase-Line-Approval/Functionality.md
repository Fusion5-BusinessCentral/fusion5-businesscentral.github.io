---
sidebar_position: 1
sidebar_class_name: 'nav-det-level'
---

# Functionality

## How to use

### Purchase Line Approval

Must be enabled in **Power Automate Flows**. 

- New fields **Approval Status** added to **Lines** in Purchase Documents. If empty, the record is not approved nor sent for approval. Available statuses: **Approval Required**, **Pending Approval**, **Approved**, **Rejected**.
- New option value in **Purchase Document** **Status** = **Pending Line Approval**. 
- A new action, **Send Approval Request** to **Lines** and **Header** of Purchase Documents, emits a **Purchase Line Approval Requested** and **Purchase Lines Approval Requested** business event that can be consumed from Power Automate.
- Whenever any of the following fields is changed (the list of tracked fields can be changed by the user in **Tracked Fields**), the **Approval Status** is set to the blank value, and the record must be re-approved.
  - **No.**
  - **Quantity**
  - **Unit Price (LCY)**
  - **Line Discount %**
  - **VAT Base Amount**
  - **Line Amount**
  - **Direct Unit Cost**
- Tracked fields support tolerance definition (both absolute and percentage). The tolerance can be allowed for all purchase document types or only for selected ones.
- Purchase Line Approval supports additional tracked table - Document Dimension. Tracked dimensions can be configured through the **Power Automate Flow** -> **Additional Tracked Tables**.
- You can use **Record Limits** to define Purchase Lines that must be approved whenever any tracked fields are changed.

## Setup

New option **Purchase Line Approval** in **Power Automate Flows** table. 

When changing the flow to disabled, the system checks whether there are any **Purchase Documents** with **Status** = **Pending Line Approval**. If any document with this status exist, they are automatically changed to **Status** = **Open**.

### Approval User Setup

Approval User Setup has been extended with two new fields: **Purchase Line Approval Limit** and **Unlimited Purchase Line Approver**. These fields are available in Power Automate through the purchaseLineApprovalLimits API (see below.)

### Power Automate Flow Extended Setup

The extended setup (available from the Power Automate Flow page) has two new setup fields to define behaviour for nonapproved documents and printing: **Purchase Order Print Conditions** and **Purchase Return Order Print Conditions**.

## Power Automate

Do you want to know more about the workflow & approval process using Power Automate and our Fusion5 addon? See the documentation for [Fusion5 Pack for Power Automate](../07-Pack-for-Power-Automate/Functionality.md).

To configure the Power Automate flow, open https://make.powerautomate.com/ with the tenant account with the BC license assigned. The BC license is needed to be able to use Premium BC connectors without additional licenses.

In Power Automate, go to **Solutions** -> **Import Solution**.

### Download Power Automate Template

Single Approver Power Automate Flow template solution is available from **Power Automate Templates**.

## Available API Pages

All API pages have APIPublisher = 'fusion5', APIGroup = 'purchaseLineApproval';

- **Purchase Line Limits** (View line approvers and their limits)
  - APIVersion = 'v1.0';
  - EntityName = 'purchaseLineApprovalLimit';
  - EntitySetName = 'purchaseLineApprovalLimits';

- **Purchase Lines** (View existing Purchase Lines)
  - APIVersion = 'v1.0';
  - EntityName = 'purchaseLine';
  - EntitySetName = 'purchaseLines';

- **Purchase Headers** (View existing Purchase Headers)
  - APIVersion = 'v1.0';
  - EntityName = 'purchaseHeader';
  - EntitySetName = 'purchaseHeaders';

## Available External Business Events for Power Automate

- Purchase Lines (Fusion5)
  - **Purchase Line Approval Requested**, Triggered when a purchase line is requested for single line
  - **Purchase Line Approval Requested for Whole Document**, Triggered when a purchase line is requested for the whole document
