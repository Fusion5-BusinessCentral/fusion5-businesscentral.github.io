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
- You can use **Record Limits** to define Purchase Lines that must be approved whenever any of the tracked fields is changed.

## Setup

New option **Purchase Line Approval** in **Power Automate Flows** table. 

When changing the flow to disabled, the system checks whether there are any **Purchase Documents** with **Status** = **Pending Line Approval**. If any document with this status exist, they are automatically changed to **Status** = **Open**.

## Power Automate

Do you want to know more about the workflow & approval process using Power Automate and our Fusion5 addon? See the documentation for [Fusion5 Pack for Power Automate](../07-Pack-for-Power-Automate/Functionality.md).

To configure the Power Automate flow, open https://make.powerautomate.com/ with the tenant account with the BC license assigned. The BC license is needed to be able to use Premium BC connectors without additional licenses.

In Power Automate, go to **Solutions** -> **Import Solution**.

## Available API Pages

All API pages have APIPublisher = 'fusion5', APIGroup = 'purchaseLineApproval';

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
