---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.

## [2.4.0] - 2024-06-25
  
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
  
### Changes
- **Import Attachments** functionality now support imports of any files. Before this functionality was available for ZIP files only. ZIP files are still automatically unzipped, and the 1st level content is imported instead. 
- JsonHelper has a new procedure GetJsonTokenAsDateForXMLFormatDateNode
- REST Management now returns content for Requests even if the request was not successful. This allows other apps to handle correctly errors returned from endpoints.

## [2.2.0] - 2024-03-28
  
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
