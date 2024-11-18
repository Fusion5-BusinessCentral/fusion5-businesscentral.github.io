---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.

## [4.1.0.0] - 2024-11-05
  
Available version: 25.0+

### Fixes
- Fixed the issue where users were not able to change the UrlKey in the REST Authentication module.

## [4.0.0.0] - 2024-10-22
  
Available version: 25.0+

### Changes
- Internal changes and updates to reflect changes in v25

### Extensibility
- **Import Attachments** processing report request page variable **ReplaceWithSameName** is now marked as protected and accessible from report extensions.
- New event **OnImportAttachmentAfterSaveAttachmentFromStream** in **Import Attachments** module.

## [3.2.0.0] - 2024-11-05
  
Available version: 24.0+
### v4.1.0.0 released as a hotfix for v24.0

## [3.1.0.0] - 2024-10-22
  
Available version: 24.0+

### Part of v4.0.0.0 released as a hotfix for v24.0
- **Import Attachments** processing report request page variable **ReplaceWithSameName** is now marked as protected and accessible from report extensions.
- New event **OnImportAttachmentAfterSaveAttachmentFromStream** in **Import Attachments** module.

## [3.0.0.1] - 2024-08-29
  
Available version: 24.0+

### Changes
- Refactoring to meet updated Fusion5 programming standards.
- Improved telemetry for data modification tool and REST authentication modules.
- REST Module
  - A new table, **REST Predefined Scope**, can be used to define default scopes available based on the REST Template. The Scope field in the REST Authentication table allows users to select values from this table and add manually defined values.
  - **IMPORTANT:** From this version, the template in REST Authentication can not be changed once it has been changed from blank to non-blank. Administrators must create a new setup record to use a different template.
  - **Scope** field will be changed in 26.0 from 100 characters to 2048 characters.
- 71697626 "FS5A03 Json Helper"
  - New procedure GetJsonTokenAsSecretText(JsonObject; Text): SecretText
  - All procedures parsing Access/Refresh tokens were obsoleted and replaced by similar procedures with the SecretText parameter.

### Obsoleted Functionality (will be removed in 25.0)
  - table 71697625 "FS5A03 REST Authentication"
    - GetBase64(): Text -> replaced by GetBase64AuthAsSecretText(): SecretText
    - GetSecret(): Text -> replaced by GetSecretAsSecretText(): SecretText
    - GetBearer(): Text -> replaced by GetBearerAsSecretText(): SecretText
    - GetRefreshToken(): Text -> replaced by GetRefreshTokenAsSecretText(): SecretText

### Obsoleted Functionality (will be removed in 26.0)
- There are no obsoleted functions from the user's perspective.
- Obsoleted functions/objects:
  - 71697634 "FS5A03 Config. Package Mgt." (the logic is now part of OOTB functionality)
  - 71697626 "FS5A03 Json Helper"
    - ParseAccessTokenResponse(JsonInStream: InStream; var AccessToken: Text; var AccessTokenExpiration: DateTime)
    - ParseAccessTokenResponse(JsonInStream: InStream; var AccessToken: Text; var AccessTokenExpiration: DateTime; ExpirationsOffset: Integer)
    - ParseAccessTokenResponse(Response: JsonObject; var AccessToken: Text; var AccessTokenExpiration: DateTime)
    - ParseAccessTokenResponse(Response: JsonObject; var AccessToken: Text; var AccessTokenExpiration: DateTime; ExpirationsOffset: Integer)
    - ParseRefreshTokenResponse(Response: JsonObject; var RefreshToken: Text)
      - Procedures replaced all these procedures with the SecretTextToken parameter. The current implementation with the Text parameter will be removed in 26.0
  - table 71697625 "FS5A03 REST Authentication"
    - SetSecret(Text) -> replaced by SetSecret(SecretText)
      - New function SetSecretTemporaryRecord(Text) for temporary secrets only.
    - SetBearer(Text) -> replaced by SetBearer(SecretText)
    - SetBearer(Text; DateTime) -> replaced by SetBearer(SecretText; DateTime)
      - New function SetBearerTemporaryRecord(Text; DateTime) for temporary secrets only.
    - SetRefreshToken(Text) -> replaced by SetRefreshToken(SecretText)
    - SetRefreshToken(Text; DateTime) -> replaced by SetRefreshToken(SecretText; DateTime)
      - New function SetBearerTemporaryRecord(Text; DateTime) for temporary secrets only.
    - SetCertificatePassword(Text) -> replaced by SetCertificatePassword(SecretText)

### Removed Functionality
- Support for Blob export/import using configuration packages (is now supported by OOTB logic).

## [2.5.0] - 2024-07-24
  
Available version: 23.0+

### Changes
- FetchAuthorizationCode() procedure in REST module now returns better error including all details.
- REST module now support errors returned from API in response body. 

## [2.4.0] - 2024-06-25
  
Available version: 23.0+

### Changes
- JsonHelper has a new procedures:
  - ParseAccessTokenResponse(Response: JsonObject; var AccessToken: Text; var AccessTokenExpiration: DateTime)
  - ParseAccessTokenResponse(Response: JsonObject; var AccessToken: Text; var AccessTokenExpiration: DateTime; ExpirationsOffset: Integer)
  - ParseRefreshTokenResponse(Response: JsonObject; var RefreshToken: Text)
- REST Authentication now supports OAuth2 authentication flow with authorization code (previously only OAuth2 with client credential flow was supported)
  - To support this authentication method, there are major changes to the table fields and table structure that store REST authentication details.
  - There is a new internal control addin page that handles redirect to external platform where user can log in with external login details.
  - New procedures (used internally, but are available publicly if needed)
    - procedure FetchAuthorizationCode()
    - procedure FetchBearerUsingRefreshToken()
    - procedure FetchBearerUsingRefreshToken(Force: Boolean)
    - procedure TryFetchBearerTokenUsingRefreshToken(): Boolean
    - procedure TryFetchBearerTokenUsingRefreshToken(Force: Boolean): Boolean
  - New event
    - OnAfterFetchAuthorizationCodeAfterFetchBearerToken(RESTAuthentication: Record "FS5A03 REST Authentication"; BearerFetched: Boolean)

## [2.3.0] - 2024-05-31
  
Available version: 23.0+

### Changes
- **Import Attachments** functionality now support imports of any files. Before this functionality was available for ZIP files only. ZIP files are still automatically unzipped, and the 1st level content is imported instead. 
- JsonHelper has a new procedure GetJsonTokenAsDateForXMLFormatDateNode
- REST Management now returns content for Requests even if the request was not successful. This allows other apps to handle correctly errors returned from endpoints.

## [2.2.0] - 2024-03-28
  
Available version: 23.0+

### Changes
- Fusion5 telemetry logger was moved from A02 IT Pack to A00 Licensing.

### Fixes
- CreateTableRelation procedure now supports up to 250 incremented Table Relation codes.

## [2.1.0] - 2024-01-31
  
Available version: 23.0+

### Changes
- "Table Relations" now contains information about the extension from which the relation comes (if an extension created the relation).
- New codeunit 71697637 "FS5A03 Table Relation Mgt.", a facade for creating table relation programmatically from another extension.
  - CreateTableRelation(Code: Code[20]; SourceTableNo: Integer; TargetTableNo: Integer) TableRelation: Record "FS5A03 Table Relation"
  - CreateTableRelationLineFilter(TableRelation: Record "FS5A03 Table Relation"; TargetFieldNo: Integer; TargetFieldFilter: Text[100])
  - CreateTableRelationLineField(TableRelation: Record "FS5A03 Table Relation"; TargetFieldNo: Integer; SourceFieldNo: Integer)

### Fixes
- Fix for "FS5A03 Big Text Editor" addin for older browsers

## [2.0.0] - 2024-01-24
  
Available version: 23.0+

### Changes
- Page 71697637 "FS5A03 Big Text Editor"
- Internal changes for BC 2023 wave 2 (namespaces, minor refactoring)

## [1.4.0] - 2023-12-18
  
Available version: 22.2+

### Changes
- Table Relation functuonality

### Fixes
- REST Authentication: Remove applied filters when new record is created (otherwise the new record can dissapear if not within filter conditions)

## [1.3.0] - 2023-10-27
  
Available version: 22.2+

First App-Source version
