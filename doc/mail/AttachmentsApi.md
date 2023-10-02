# .AttachmentsApi

All URIs are relative to *https://mail-service.iran.liara.ir/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadAttachments**](AttachmentsApi.md#downloadAttachments) | **GET** /mails/{mailServerID}/messages/{messageID}/attachments/{attachmentID} | download attachment
[**getAllAttachments**](AttachmentsApi.md#getAllAttachments) | **GET** /mails/{mailServerID}/messages/{messageID}/attachments | get all attachments for message


# **downloadAttachments**
> MailAttachment downloadAttachments()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AttachmentsApi(configuration);

let body:.AttachmentsApiDownloadAttachmentsRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // string
  messageID: "62ECB020842930cc01FFCCfe",
  // string
  attachmentID: "62ECB020842930cc01FFCCfe",
};

apiInstance.downloadAttachments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined
 **messageID** | [**string**] |  | defaults to undefined
 **attachmentID** | [**string**] |  | defaults to undefined


### Return type

**MailAttachment**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server or Mail Message not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllAttachments**
> MailAttachments getAllAttachments()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AttachmentsApi(configuration);

let body:.AttachmentsApiGetAllAttachmentsRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // string
  messageID: "62ECB020842930cc01FFCCfe",
};

apiInstance.getAllAttachments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined
 **messageID** | [**string**] |  | defaults to undefined


### Return type

**MailAttachments**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server or Mail Message not found |  -  |
**409** | Account already taken. |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


