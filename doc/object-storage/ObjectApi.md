# .ObjectApi

All URIs are relative to *https://storage-service.iran.liara.ir/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteObject**](ObjectApi.md#deleteObject) | **DELETE** /buckets/{bucket}/objects/{prefix} | Delete Object
[**downloadObject**](ObjectApi.md#downloadObject) | **GET** /buckets/{bucket}/download/${object} | Download Object
[**getListObjects**](ObjectApi.md#getListObjects) | **GET** /buckets/{bucket}/objects/{prefix} | List Objects
[**getStatObject**](ObjectApi.md#getStatObject) | **GET** /buckets/{bucket}/objects/statistics/{object} | Get Stat Object
[**uploadObject**](ObjectApi.md#uploadObject) | **GET** /buckets/{bucket}/upload/{object} | Upload Object


# **deleteObject**
> void deleteObject()

Delete an object from storage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ObjectApi(configuration);

let body:.ObjectApiDeleteObjectRequest = {
  // string
  bucket: "bucket_example",
  // string
  prefix: "prefix_example",
};

apiInstance.deleteObject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined
 **prefix** | [**string**] |  | defaults to undefined


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
**204** | successful operation |  -  |
**400** | Bad Request |  -  |
**401** | Missing authentication |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **downloadObject**
> void downloadObject()

Return presigned url for download object

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ObjectApi(configuration);

let body:.ObjectApiDownloadObjectRequest = {
  // string
  bucket: "bucket_example",
  // string | specify object path
  object: "object_example",
  // string | example: 2 days 7 hours 45 minutes (optional)
  expiry: "expiry_example",
};

apiInstance.downloadObject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined
 **object** | [**string**] | specify object path | defaults to undefined
 **expiry** | [**string**] | example: 2 days 7 hours 45 minutes | (optional) defaults to undefined


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
**200** | successful operation |  -  |
**400** | Bad Request |  -  |
**401** | Missing authentication |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getListObjects**
> void getListObjects()

Return list of objects ( max:50, min:1 )

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ObjectApi(configuration);

let body:.ObjectApiGetListObjectsRequest = {
  // string
  bucket: "bucket_example",
  // string
  prefix: "prefix_example",
  // string | specify number of object ( max: 50, min: 1 ) (optional)
  number: "number_example",
  // string (optional)
  page: "page_example",
};

apiInstance.getListObjects(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined
 **prefix** | [**string**] |  | defaults to undefined
 **number** | [**string**] | specify number of object ( max: 50, min: 1 ) | (optional) defaults to undefined
 **page** | [**string**] |  | (optional) defaults to undefined


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
**200** | successful operation |  -  |
**400** | Bad Request |  -  |
**401** | Missing authentication |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getStatObject**
> void getStatObject()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ObjectApi(configuration);

let body:.ObjectApiGetStatObjectRequest = {
  // string
  bucket: "bucket_example",
  // string
  object: "object_example",
};

apiInstance.getStatObject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined
 **object** | [**string**] |  | defaults to undefined


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
**204** | successful operation |  -  |
**400** | Bad Request |  -  |
**401** | Missing authentication |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadObject**
> void uploadObject()

Return presigned url for download object

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ObjectApi(configuration);

let body:.ObjectApiUploadObjectRequest = {
  // string
  bucket: "bucket_example",
  // string | specify object path
  object: "object_example",
};

apiInstance.uploadObject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined
 **object** | [**string**] | specify object path | defaults to undefined


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
**200** | successful operation |  -  |
**400** | Bad Request |  -  |
**401** | Missing authentication |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


