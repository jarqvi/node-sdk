# .SettingsApi

All URIs are relative to *https://api.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**defaultSubdomain**](SettingsApi.md#defaultSubdomain) | **POST** /v1/projects/{id}/default-subdomain/{status} | Default subdomain
[**ipStatic**](SettingsApi.md#ipStatic) | **POST** /v1/projects/{id}/fixed-ip/{status} | IP static
[**updateEnvs**](SettingsApi.md#updateEnvs) | **POST** /v1/projects/update-envs | Update envs
[**zeroDowntime**](SettingsApi.md#zeroDowntime) | **POST** /v1/projects/{id}/zero-downtime/{status} | Zero downtime


# **defaultSubdomain**
> void defaultSubdomain()

default subdomain that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SettingsApi(configuration);

let body:.SettingsApiDefaultSubdomainRequest = {
  // string
  id: "id_example",
  // string | disable or enable
  status: "status_example",
};

apiInstance.defaultSubdomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **status** | [**string**] | disable or enable | defaults to undefined


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
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ipStatic**
> any ipStatic()

ip static that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SettingsApi(configuration);

let body:.SettingsApiIpStaticRequest = {
  // string
  id: "id_example",
  // string | disable or enable
  status: "status_example",
};

apiInstance.ipStatic(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **status** | [**string**] | disable or enable | defaults to undefined


### Return type

**any**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEnvs**
> void updateEnvs(updateEnvs)

update envs that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SettingsApi(configuration);

let body:.SettingsApiUpdateEnvsRequest = {
  // UpdateEnvs
  updateEnvs: {
    project: "project_example",
    variables: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
  },
};

apiInstance.updateEnvs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateEnvs** | **UpdateEnvs**|  |


### Return type

**void**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **zeroDowntime**
> void zeroDowntime()

zero downtime that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SettingsApi(configuration);

let body:.SettingsApiZeroDowntimeRequest = {
  // string
  id: "id_example",
  // string | disable or enable
  status: "status_example",
};

apiInstance.zeroDowntime(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **status** | [**string**] | disable or enable | defaults to undefined


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
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


