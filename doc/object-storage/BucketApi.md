# .BucketApi

All URIs are relative to *https://storage-service.iran.liara.ir/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeBucketAccess**](BucketApi.md#changeBucketAccess) | **PATCH** /buckets/{bucket}/type/{permission} | change Bucket Access Policy
[**checkBucket**](BucketApi.md#checkBucket) | **GET** /buckets/{bucket}/check-availability | Check Bucket availability
[**createBucket**](BucketApi.md#createBucket) | **POST** /buckets | Create Bucket
[**destroyBucket**](BucketApi.md#destroyBucket) | **DELETE** /buckets/{bucket} | Destroy Bucket
[**getBuckets**](BucketApi.md#getBuckets) | **GET** /buckets | List all Buckets
[**getListPreviousBuckets**](BucketApi.md#getListPreviousBuckets) | **GET** /buckets/migration/from | List storage service buckets
[**getMigrations**](BucketApi.md#getMigrations) | **GET** /buckets/migrations | list migration operation
[**getSingleBuckets**](BucketApi.md#getSingleBuckets) | **GET** /buckets/{bucket} | Get Single Buckets
[**migratingBuckets**](BucketApi.md#migratingBuckets) | **POST** /buckets/migrates | Migrating buckets
[**upgradeBucket**](BucketApi.md#upgradeBucket) | **PATCH** /buckets/{bucket}/upgrade/{plan} | Upgrade Bucket


# **changeBucketAccess**
> void changeBucketAccess()

Change Bucket Access policy on an object storage ( public / private )

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BucketApi(configuration);

let body:.BucketApiChangeBucketAccessRequest = {
  // string
  bucket: "bucket_example",
  // string
  permission: "permission_example",
};

apiInstance.changeBucketAccess(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined
 **permission** | [**string**] |  | defaults to undefined


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
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **checkBucket**
> void checkBucket()

Check if you can create Bucket with specified Name.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BucketApi(configuration);

let body:.BucketApiCheckBucketRequest = {
  // string
  bucket: "bucket_example",
};

apiInstance.checkBucket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined


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

# **createBucket**
> void createBucket(body)

creates a new bucket on an object storage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BucketApi(configuration);

let body:.BucketApiCreateBucketRequest = {
  // CreateBucket | create bucket. Acceptable values for permission: ( private / public ) and for plan: ( 20g, 40g, 80g, 160g )
  body: {
    name: "name_example",
    plan: "plan_example",
    permission: "permission_example",
  },
};

apiInstance.createBucket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateBucket**| create bucket. Acceptable values for permission: ( private / public ) and for plan: ( 20g, 40g, 80g, 160g ) |


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
**201** | successful operation |  -  |
**400** | Bad Request |  -  |
**401** | Missing authentication |  -  |
**409** | Conflict |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **destroyBucket**
> void destroyBucket()

Delete Bucket on an object storage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BucketApi(configuration);

let body:.BucketApiDestroyBucketRequest = {
  // string
  bucket: "bucket_example",
};

apiInstance.destroyBucket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined


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
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBuckets**
> void getBuckets()

List all Bucket

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BucketApi(configuration);

let body:any = {};

apiInstance.getBuckets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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
**401** | Missing authentication |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getListPreviousBuckets**
> void getListPreviousBuckets()

List previous buckets of storage service in liara.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BucketApi(configuration);

let body:any = {};

apiInstance.getListPreviousBuckets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMigrations**
> void getMigrations()

list migration operation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BucketApi(configuration);

let body:any = {};

apiInstance.getMigrations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSingleBuckets**
> void getSingleBuckets()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BucketApi(configuration);

let body:.BucketApiGetSingleBucketsRequest = {
  // string
  bucket: "bucket_example",
};

apiInstance.getSingleBuckets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined


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
**401** | Missing authentication |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **migratingBuckets**
> void migratingBuckets(body)

Move data from one bucket to another

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BucketApi(configuration);

let body:.BucketApiMigratingBucketsRequest = {
  // MigrateBucket | Migrate buckets
  body: {
    _from: "_from_example",
    to: "to_example",
    path: "path_example",
  },
};

apiInstance.migratingBuckets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **MigrateBucket**| Migrate buckets |


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
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **upgradeBucket**
> void upgradeBucket()

Upgrade Bucket plan ( just make space bigger )

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BucketApi(configuration);

let body:.BucketApiUpgradeBucketRequest = {
  // string
  bucket: "bucket_example",
  // string
  plan: "plan_example",
};

apiInstance.upgradeBucket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined
 **plan** | [**string**] |  | defaults to undefined


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
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | server does not response |  -  |
**502** | bad gateway |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


