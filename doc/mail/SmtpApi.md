# .SmtpApi

All URIs are relative to *https://mail-service.iran.liara.ir/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSmtpCredential**](SmtpApi.md#deleteSmtpCredential) | **DELETE** /mails/{mailServerID}/smtp-credentials/{username} | delete smtp credential
[**generateCredentials**](SmtpApi.md#generateCredentials) | **POST** /mails/{mailServerID}/smtp-credentials | generate credentials to connet mail server with SMTP
[**getCredential**](SmtpApi.md#getCredential) | **GET** /mails/{mailServerID}/smtp-credentials | get credential to connect to mail server with SMTP
[**revokeCredentials**](SmtpApi.md#revokeCredentials) | **PATCH** /mails/{mailServerID}/smtp-credentials | revoke credentials to connect mail server with SMTP


# **deleteSmtpCredential**
> void deleteSmtpCredential()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SmtpApi(configuration);

let body:.SmtpApiDeleteSmtpCredentialRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // string
  username: "username_example",
};

apiInstance.deleteSmtpCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined
 **username** | [**string**] |  | defaults to undefined


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
**204** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server or SMTP Credential not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generateCredentials**
> CreateSMTP generateCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SmtpApi(configuration);

let body:.SmtpApiGenerateCredentialsRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // Model4 (optional)
  body: {
    description: "description_example",
  },
};

apiInstance.generateCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Model4**|  |
 **mailServerID** | [**string**] |  | defaults to undefined


### Return type

**CreateSMTP**

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
**403** | Allowed to create only 10 smtp credentials |  -  |
**404** | Mail Server not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCredential**
> SMTP getCredential()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SmtpApi(configuration);

let body:.SmtpApiGetCredentialRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
};

apiInstance.getCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined


### Return type

**SMTP**

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

# **revokeCredentials**
> CreateSMTP revokeCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SmtpApi(configuration);

let body:.SmtpApiRevokeCredentialsRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // Model9 (optional)
  body: {
    username: "username_example",
  },
};

apiInstance.revokeCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Model9**|  |
 **mailServerID** | [**string**] |  | defaults to undefined


### Return type

**CreateSMTP**

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
**404** | Mail Server or Username not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


