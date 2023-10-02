# .ReportsApi

All URIs are relative to *https://api.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDatabaseCpuReports**](ReportsApi.md#getDatabaseCpuReports) | **GET** /v1/databases/{id}/metrics/cpu?since&#x3D;{since} | Get cpu reports of database
[**getDatabaseMemoryReports**](ReportsApi.md#getDatabaseMemoryReports) | **GET** /v1/databases/{id}/metrics/memory?since&#x3D;{since} | Get memory reports of database
[**getDatabaseNetworkReceiveReports**](ReportsApi.md#getDatabaseNetworkReceiveReports) | **GET** /v1/databases/{id}/metrics/network-receive?since&#x3D;{since} | Get network-receive reports of database
[**getDatabaseNetworkTransmitReports**](ReportsApi.md#getDatabaseNetworkTransmitReports) | **GET** /v1/databases/{id}/metrics/network-transmit?since&#x3D;{since} | Get network-transmit reports of database
[**getDatabaseSummaryReports**](ReportsApi.md#getDatabaseSummaryReports) | **GET** /v1/databases/{id}/metrics/summary | Get summary reports of database


# **getDatabaseCpuReports**
> void getDatabaseCpuReports()

get cpu reports of database that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiGetDatabaseCpuReportsRequest = {
  // string | The name of your database
  id: "id_example",
  // number | The since of your cpu reports
  since: 3.14,
};

apiInstance.getDatabaseCpuReports(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The name of your database | defaults to undefined
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
**404** | Database does not exists. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDatabaseMemoryReports**
> void getDatabaseMemoryReports()

get memory reports of database that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiGetDatabaseMemoryReportsRequest = {
  // string | The name of your database
  id: "id_example",
  // number | The since of your memory reports
  since: 3.14,
};

apiInstance.getDatabaseMemoryReports(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The name of your database | defaults to undefined
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
**404** | Database does not exists. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDatabaseNetworkReceiveReports**
> void getDatabaseNetworkReceiveReports()

get network-receive reports of database that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiGetDatabaseNetworkReceiveReportsRequest = {
  // string | The name of your database
  id: "id_example",
  // number | The since of your network-receive reports
  since: 3.14,
};

apiInstance.getDatabaseNetworkReceiveReports(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The name of your database | defaults to undefined
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
**404** | Database does not exists. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDatabaseNetworkTransmitReports**
> void getDatabaseNetworkTransmitReports()

get network-transmit reports of database that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiGetDatabaseNetworkTransmitReportsRequest = {
  // string | The name of your database
  id: "id_example",
  // number | The since of your network-transmit reports
  since: 3.14,
};

apiInstance.getDatabaseNetworkTransmitReports(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The name of your database | defaults to undefined
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
**404** | Database does not exists. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDatabaseSummaryReports**
> void getDatabaseSummaryReports()

get summary reports of database that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiGetDatabaseSummaryReportsRequest = {
  // string | The name of your database
  id: "id_example",
};

apiInstance.getDatabaseSummaryReports(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The name of your database | defaults to undefined


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
**404** | Database does not exists. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


