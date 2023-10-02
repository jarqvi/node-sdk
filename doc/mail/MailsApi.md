# .MailsApi

All URIs are relative to *https://mail-service.iran.liara.ir/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeMailServerMode**](MailsApi.md#changeMailServerMode) | **PATCH** /mails/{mailServerID} | chagen mail server mode
[**changeMailServerPlan**](MailsApi.md#changeMailServerPlan) | **PUT** /mails/{mailServerID}/plans | change mail server plan
[**checkDomainAvailable**](MailsApi.md#checkDomainAvailable) | **GET** /mails/{domain}/check-availability | check if domain name is available
[**checkMailServerDnsStatus**](MailsApi.md#checkMailServerDnsStatus) | **GET** /mails/{mailServerID}/dns-check | mail server check dns status
[**deleteMailServer**](MailsApi.md#deleteMailServer) | **DELETE** /mails/{mailServerID} | delete mail server
[**getCountFreeMails**](MailsApi.md#getCountFreeMails) | **GET** /mails/{mailServerID}/remaining-free-emails | count number of free mails every month
[**getCountMails**](MailsApi.md#getCountMails) | **GET** /mails/{mailServerID}/counts | count number of sent mails every day
[**getMails**](MailsApi.md#getMails) | **GET** /mails | get all mail servers
[**getSingleMailServer**](MailsApi.md#getSingleMailServer) | **GET** /mails/{mailServerID} | get single mail server
[**postMails**](MailsApi.md#postMails) | **POST** /mails | create mail server


# **changeMailServerMode**
> void changeMailServerMode()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailsApi(configuration);

let body:.MailsApiChangeMailServerModeRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // Model8 (optional)
  body: {
    mode: "DEV",
  },
};

apiInstance.changeMailServerMode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Model8**|  |
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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **changeMailServerPlan**
> void changeMailServerPlan()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailsApi(configuration);

let body:.MailsApiChangeMailServerPlanRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // Model10 (optional)
  body: {
    plan: "plan_example",
  },
};

apiInstance.changeMailServerPlan(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Model10**|  |
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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server or Mail Account not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **checkDomainAvailable**
> void checkDomainAvailable()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailsApi(configuration);

let body:.MailsApiCheckDomainAvailableRequest = {
  // string
  domain: "domain_example",
};

apiInstance.checkDomainAvailable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | [**string**] |  | defaults to undefined


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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **checkMailServerDnsStatus**
> CheckDNS checkMailServerDnsStatus()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailsApi(configuration);

let body:.MailsApiCheckMailServerDnsStatusRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
};

apiInstance.checkMailServerDnsStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined


### Return type

**CheckDNS**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Mail Server not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteMailServer**
> void deleteMailServer()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailsApi(configuration);

let body:.MailsApiDeleteMailServerRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
};

apiInstance.deleteMailServer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
**204** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCountFreeMails**
> RemainingFreeMails getCountFreeMails()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailsApi(configuration);

let body:.MailsApiGetCountFreeMailsRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
};

apiInstance.getCountFreeMails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined


### Return type

**RemainingFreeMails**

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

# **getCountMails**
> CountMailPerDay getCountMails()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailsApi(configuration);

let body:.MailsApiGetCountMailsRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // number (optional)
  lastNDays: 30,
};

apiInstance.getCountMails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined
 **lastNDays** | [**number**] |  | (optional) defaults to 30


### Return type

**CountMailPerDay**

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

# **getMails**
> Array<MailServer> getMails()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailsApi(configuration);

let body:any = {};

apiInstance.getMails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<MailServer>**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSingleMailServer**
> MailServer getSingleMailServer()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailsApi(configuration);

let body:.MailsApiGetSingleMailServerRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
};

apiInstance.getSingleMailServer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined


### Return type

**MailServer**

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

# **postMails**
> void postMails()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailsApi(configuration);

let body:.MailsApiPostMailsRequest = {
  // Model1 (optional)
  body: {
    plan: "plan_example",
    domain: "domain_example",
    mode: "DEV",
  },
};

apiInstance.postMails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Model1**|  |


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
**400** | Invalid request for plan |  -  |
**402** | Not enough balance |  -  |
**403** | Allowed to create only one Mail Server on the free plan |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


