# .MessagesApi

All URIs are relative to *https://mail-service.iran.liara.ir/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateTemporary**](MessagesApi.md#generateTemporary) | **POST** /mails/{mailServerID}/messages/{messageID}/temporary-access | generate temporary access to email html
[**getAllMails**](MessagesApi.md#getAllMails) | **GET** /mails/{mailServerID}/messages | get all mails
[**getSingleMail**](MessagesApi.md#getSingleMail) | **GET** /mails/{mailServerID}/messages/{messageID} | get single mail
[**getSingleMailHtml**](MessagesApi.md#getSingleMailHtml) | **GET** /mails/{mailServerID}/messages/{messageID}/render | get single mail html
[**sendMail**](MessagesApi.md#sendMail) | **POST** /mails/{mailServerID}/messages | send a mail


# **generateTemporary**
> TmpAccess generateTemporary()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiGenerateTemporaryRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // string
  messageID: "62ECB020842930cc01FFCCfe",
  // number | Specifying hourly expiration schedule options (optional)
  expiration: 1,
};

apiInstance.generateTemporary(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined
 **messageID** | [**string**] |  | defaults to undefined
 **expiration** | [**number**] | Specifying hourly expiration schedule options | (optional) defaults to 1


### Return type

**TmpAccess**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Generate token limitation |  -  |
**404** | Mail Server or Mail Message not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllMails**
> MailMessages getAllMails()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiGetAllMailsRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // 'incoming' | 'outgoing'
  direction: "incoming",
  // number (optional)
  page: 1,
  // number (optional)
  count: 15,
  // string (optional)
  state: "state_example",
  // string (optional)
  subject: "subject_example",
  // string (optional)
  _from: "from_example",
  // string (optional)
  to: "to_example",
};

apiInstance.getAllMails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined
 **direction** | [**&#39;incoming&#39; | &#39;outgoing&#39;**]**Array<&#39;incoming&#39; &#124; &#39;outgoing&#39;>** |  | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to 1
 **count** | [**number**] |  | (optional) defaults to 15
 **state** | [**string**] |  | (optional) defaults to undefined
 **subject** | [**string**] |  | (optional) defaults to undefined
 **_from** | [**string**] |  | (optional) defaults to undefined
 **to** | [**string**] |  | (optional) defaults to undefined


### Return type

**MailMessages**

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
**404** | Mail Server not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSingleMail**
> MailMessage getSingleMail()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiGetSingleMailRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // string
  messageID: "62ECB020842930cc01FFCCfe",
};

apiInstance.getSingleMail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined
 **messageID** | [**string**] |  | defaults to undefined


### Return type

**MailMessage**

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

# **getSingleMailHtml**
> void getSingleMailHtml()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiGetSingleMailHtmlRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // string
  messageID: "62ECB020842930cc01FFCCfe",
  // string
  token: "token_example",
};

apiInstance.getSingleMailHtml(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined
 **messageID** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success and returns some html text |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Mail Server or Mail Message not found |  -  |
**409** | Account already taken. |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendMail**
> void sendMail()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiSendMailRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // Model3 (optional)
  body: {
    html: "html_example",
    text: "text_example",
    subject: "subject_example",
    to: "to_example",
    _from: "_from_example",
    replyTo: "replyTo_example",
    attachments: [
      {
        name: "name_example",
        contentType: "contentType_example",
        data: "data_example",
      },
    ],
  },
};

apiInstance.sendMail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Model3**|  |
 **mailServerID** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**403** | No valid dns records exists for this mail server |  -  |
**404** | Mail Server not found |  -  |
**406** | The source and destination addresses must not be the same |  -  |
**429** | Too mnay requests |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


