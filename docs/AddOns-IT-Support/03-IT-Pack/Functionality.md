---
sidebar_position: 1
sidebar_class_name: 'nav-det-level'
---

# Functionality

### Session list
- There is a new page, **Active Sessions**, that provides a list of all active users' sessions. The same information could be obtained by administrators in the admin portal.

### Use All Objects with Caption to run objects
- There is a new action **Run** in **All Objects with Caption** that allows the user to run any object.

### REST Authentication
- This module is used by all our integrations to manage REST authentication details.
- The functionality can be found as **REST Authentication Configurations**.

### Transformation Rules ###
- **Change Sign**
  - New transformation rule that changes the sign for integer and decimal fields (+ -> -; - -> +)

### Config Packages ###
- New action **Export to Excel (Structure Only)**
- If the integration to the Dataverse, Dynamics 365 Sales, or Master Data Synchronization is enabled and the table used in the configuration package is enabled in **Integration Table Mapping**
  - **Skip Table Triggers** can not be selected
  - **Delete Recs Before Processing** can not be selected

### Send Notifications for failed/successful Job Queues
- Notifications for failed and successfully completed job queues can be enabled in **Communication Setup** using **Job Queue Notification Enabled (Recurring)** and **Job Queue Notification Enabled (Non-Recurring)**.
- One notification is sent for every completed job queue entry.
- Non-Recurring Jobs
  - Notifications are sent for failed entries only.
  - Recipient emails can be specified in **Communication Setup** in **Job Queue Notification E-Mails (Non-Recurring)**.
- Recurring Jobs
  - Notifications can be sent for both failed and successfully completed job queue entries. 
  - Notifications can be enabled in **Job Queue Categories**.
  - Recipient emails can be specified in **Job Queue Categories** in **Notification E-Mails** field.
- Notifications are sent automatically by the system in the background. There is not job for these notifications.

### Send Notifications for failed Integration Records
- Notifications for failed integration records can be enabled in **Communication Setup** using **Integration Synch. Error Notification Enabled**.
- Recipient emails can be specified in **Communication Setup** in **Integration Synch. Error Notification E-Mails**.
- Notifications are sent using a special job queue entry (**codeunit 71697633 "FS5A03 Send Int. Synch. Errors"**) that is automatically created when the notifications are enabled.
- When the job queue is run, it groups all failed entries since the last run and sends them in one email.

### Data Modification Tool
- New page **Data Modification** added to the system.
  - User must have SUPER permission set assigned and this tool enabled in the **User Setup** in **Allow Modification Tool** (field is hidden by default)
  - The tool has two modes - Update and Delete. The delete removes records from specified tables based on configured filters; the update changes the field value for specified fields and records.
  **Commit after number of processed records** specifies how often the changes should be permanently stored in the database. Be aware that once the record is committed, it's not rollbacked even if there are errors later. Example: **Commit after number of processed records = 5**; if there is an error with record no. 4, nothing is stored in the database; if there is an error with record no. 7, the first 5 changed records are stored updated, and the rest of the record is not updated.
  - **RunTrigger** and **Validate** specifies whether the code defined for the action (OnDelete/OnModify) should be run and whether the field change (OnValidate) should be run.

### Import Attachments
- New functionality to import attachments from zipped files "Import Attachments".
  - **Import to Table** specifies the table for which the attachments should be imported.
  - **Map using Field** specifies which field from the table should be used to map the attachment and the record. The optional **No. of chars from File Name** specifies how many characters from the file name should be used for mapping. The whole name is used if the field is blank (except the file type).
    - Example: Field in BC has value 1000156; the File name is "156 Invoice from 01.01.2023.pdf"
      - If the **No. of chars from File Name** is set to 3, the script will take the last three characters from the BC field (156) and the first three characters from the file name (156). As these texts are the same, the attachment will be imported.
      - If the **No. of chars from File Name** is blank, the script will take all characters from the BC field (1000156) and all characters from the file name (156 Invoice from 01.01.2023). As these texts do not match, the attachment won't be imported.
  - **Replace Attachments with Same Name** specifies whether the attachment should be skipped when there's already the attachment with the same name or replaced.

   ![image.png](./img/Import-Attachments.png)

### Table Relations
- Table relations is a new functionality that can help developers of other extensions create relations between different records from different tables.
- **Target Table No.** and **Source Table No.** specifies for which tables the relation should be created.
- In Line section, the **Target Field No.** and **Source Field No.** (only when the **Relation Type** is set to **Field**) specifies which fields creates the relation. The **Relation Type** **Filter** allows to create a static condition based on the value of the **Target Field No.**.

   ![image.png](./img/Table2Table-Relation.png)

- A codeunit **71697637 "FS5A03 Table Relation Mgt."**, a facade for creating table relation programmatically from another extension.
  - **CreateTableRelation(Code: Code[20]; SourceTableNo: Integer; TargetTableNo: Integer) TableRelation: Record "FS5A03 Table Relation"**
  - **CreateTableRelationLineFilter(TableRelation: Record "FS5A03 Table Relation"; TargetFieldNo: Integer; TargetFieldFilter: Text[100])**
  - **CreateTableRelationLineField(TableRelation: Record "FS5A03 Table Relation"; TargetFieldNo: Integer; SourceFieldNo: Integer)**

--

## For developers

There are new helpers available for our projects that make some tasks simpler.

### REST
- The REST module provides a unified way to manage authentication as well as to make API integration easier.
- The secrets/password/key is stored in a secure way and can't be obtained from BC by any user nor from another extension.

#### Authentication 
- Use the **REST Authentication Configurations** for all your REST authentication. Do not create authentication fields manually; create a setup field with relation to **table 77050 "FS5A03 REST Authentication"**.

#### Codeunit 71697627 "FS5A03 REST Management"
- Use this codeunit to handle all REST communication. It makes all integration really, really, really easier. 
- Currently, it supports the following authentication methods
  - None
  - Basic
  - OAuth2 (Client Credentials)
  - OAuth2 (Authorization Code)
  - API
  - Bearer
  - URL Key (key/password passed as API parameter)

#### REST Tester
- Use the **REST Tester** page to test any of your REST APIs as well as configuration setup.

### Communication Setup
- Generic setup table that can be used for our setup fields.
- table 71697627, page 71697632

### Codeunit 71697625 "FS5A03 Progress Dialog Mgt."
- Use this codeunit for **ALL** progress dialogs. It replaces the standard **Dialog** data type for all our projects.

### Codeunit 71697626 "FS5A03 Json Helper"
- Use this codeunit if you need to work with JSON files. It provides procedures that make tasks easier.

### Codeunit 71697628 "FS5A03 Item Tracking Helper"
- Use this codeunit if you need to create item tracking manually.

### Page 71697637 "FS5A03 Big Text Editor"
- This is a special page with a custom control add-in, "FS5A03 Big Text Editor. " It has one extra-large text field that covers a whole page.
- It is also possible to use directly controladdin "FS5A03 Big Text Editor"; however, there are some limitations on how the field can be used on existing pages, especially if the page has other fields. The recommendation is always to use page 71697637 and open the editor as a new page.
- There are three public methods. Use these procedures to set/get the text value from the field or to set the page caption.
  - SetText(NewText: Text)
  - SetName(NewName: Text)
  - GetText(): Text

### Processing Parameters
- This module consists of three objects - Codeunit, Temporary Table and Enum.
- It can be used to pass parameters from the report request page to the processing codeunits. This module allows you to extend request pages and still pass the parameters without writing different setters.
- How to use
  - In the report extension, create a global protected variable with the **codeunit 71697648 FS5A03ProcessingParameter** (protected = any reportextension will be able to use the same instance)
  - Extend **enum 71697631 FS5A03ProcessingParamType** with your report request page values.
  - Use **codeunit 71697648 FS5A03ProcessingParameter** and the **Set()** procedure to set the value.
  - Pass the instance of **codeunit 71697648 FS5A03ProcessingParameter** to your processing object and to all events where you want to make it available.
  - Use **codeunit 71697648 FS5A03ProcessingParameter** and any getter method to get the parameter when needed.

### Export Buffer
- Module consists of multiple export objects
  - table 71697634 FS5A03ExportBuffer
  - table 71697633 FS5A03ExportParameters
  - table 71697632 FS5A03ExportOutputValues
  - table 71697635 FS5A03ExportErrorBuffer
  - page 71697640 FS5A03ExportErrors
  - codeunit 71697638 FS5A03ExportFile
- Use this module whenever you need to export data from Business Central and have a generic export solution. Regardless of the source of your input, once the buffer tables are populated, the export logic can be generic.

### Json Viewer
- Json Viewer is a FactBox (**page 71697641 FS5A03JsonViewer**) that can be used to show formatted Json Object. Formatting is done using custom **controladdin FS5A03JsonViewer** that is based on **JSONViewer - by Roman Makudera 2016 (c) MIT licence**

### Text Encoding enum
- **enum 71697632 FS5A03TextEncoding**. It does not have any additional functionality and can be used as a field whenever you want users allow to select encoding.
