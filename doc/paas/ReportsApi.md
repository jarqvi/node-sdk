# .ReportsApi

All URIs are relative to *https://api.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppCpuReports**](ReportsApi.md#getAppCpuReports) | **GET** /v1/projects/{name}/metrics/cpu?since&#x3D;{since} | Get cpu reports of app
[**getAppMemoryReports**](ReportsApi.md#getAppMemoryReports) | **GET** /v1/projects/{name}/metrics/memory?since&#x3D;{since} | Get memory reports of app
[**getAppNetworkReceiveReports**](ReportsApi.md#getAppNetworkReceiveReports) | **GET** /v1/projects/{name}/metrics/network-receive?since&#x3D;{since} | Get network-receive reports of app
[**getAppSummaryReports**](ReportsApi.md#getAppSummaryReports) | **GET** /v1/projects/{name}/metrics/summary | Get summary reports of app
[**getNetworkTransmitReports**](ReportsApi.md#getNetworkTransmitReports) | **GET** /v1/projects/{name}/metrics/network-transmit?since&#x3D;{since} | Get network-transmit reports of app


# **getAppCpuReports**
> void getAppCpuReports()

get cpu reports of app that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiGetAppCpuReportsRequest = {
  // string | The name of your app
  name: "name_example",
  // number | The since of your cpu reports
  since: 3.14,
};

apiInstance.getAppCpuReports(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of your app | defaults to undefined
 **since** | [**number**] | The since of your cpu reports | defaults to undefined


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
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAppMemoryReports**
> void getAppMemoryReports()

get memory reports of app that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiGetAppMemoryReportsRequest = {
  // string | The name of your app
  name: "name_example",
  // number | The since of your memory reports
  since: 3.14,
};

apiInstance.getAppMemoryReports(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of your app | defaults to undefined
 **since** | [**number**] | The since of your memory reports | defaults to undefined


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
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAppNetworkReceiveReports**
> void getAppNetworkReceiveReports()

get network-receive reports of app that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiGetAppNetworkReceiveReportsRequest = {
  // string | The name of your app
  name: "name_example",
  // number | The since of your network-receive reports
  since: 3.14,
};

apiInstance.getAppNetworkReceiveReports(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of your app | defaults to undefined
 **since** | [**number**] | The since of your network-receive reports | defaults to undefined


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
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAppSummaryReports**
> void getAppSummaryReports()

get summary reports of app that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiGetAppSummaryReportsRequest = {
  // string | The name of your app
  name: "name_example",
};

apiInstance.getAppSummaryReports(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of your app | defaults to undefined


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
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNetworkTransmitReports**
> void getNetworkTransmitReports()

get network-transmit reports of app that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiGetNetworkTransmitReportsRequest = {
  // string | The name of your app
  name: "name_example",
  // number | The since of your network-transmit reports
  since: 3.14,
};

apiInstance.getNetworkTransmitReports(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of your app | defaults to undefined
 **since** | [**number**] | The since of your network-transmit reports | defaults to undefined


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
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


