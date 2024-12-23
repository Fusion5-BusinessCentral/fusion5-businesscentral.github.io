---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
 
## [2.1.0] - 2024-10-31
  
Available version: 24.0+

### Fixes
- BPAY Register No. was not correctly transfered to the payment Vendor Ledger Entry.

### Changes
- Final refactoring to follow changes in v24 suggested by LinterCop.
- **BPAY Bank Code** code field must have a value.
- New column in **Remittance Advice - Entries** report
  - FS5A02EFTBPAYFileCreateDateFormatted (contains date when the EFT or BPAY register was created, based on the payment type)

## [2.0.0] - 2024-08-28
  
Available version: 24.0+

### Changes
- Remove the CSV header from Westpac CSV format as it is not longer supported.
- New format: Westpac PPS (BPAY ABA)
- The BPAY exported file name defaults to **BPAY_BANKCODE_YYYYMMDD.XX** where XX is the file extension defined by the bank.

### Fixes
- The BPAY fields in **Vendor Ledger Entries** are now editable for open entries.

## [1.4.0] - 2024-06-28
  
Available version: 23.0+

### Changes
- BPAY Field was added to the payment journal page (hidden by default).
- Purchase Document fields are now copied to archived document automatically.
- Action to open **Vendor BPAY Accounts** is now available also from the **Vendor List**.
- BPAY fields are copied to posted credit note automatically, if they are stored in unposted purchase document (for example because the purchase credit was created by copying posted purchase invoice).

### Fixes
- Fix of the issue where the Bank Account fields were not editable when the card was reopened.
- Customer Reference No. fields were changed from BigInteger to Code[20]. This changed fixed the problem with assigning references with 20 digits. Old field is hidden by default and will be removed in v25; the values were copied automatically from the old field to the new field.
- Export buffer was redesign to offer better performance when processing >300 lines.
- Fix of the permission issue if the user does not have old Microsoft permissions and only the new permissionsets are used. 

## [1.3.0] - 2024-03-04
  
Available version: 22.2+

### Fixes
- Show correct file name and bank account in BPAY register.

## [1.2.0] - 2023-11-15
  
Available version: 22.2+

Internal release (licensing changes)

## [1.1.0] - 2023-10-28
  
Available version: 22.2+

First App-Source version
