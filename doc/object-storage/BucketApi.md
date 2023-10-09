# BucketApi

All URIs are relative to *https://storage-service.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeBucketAccess**](BucketApi.md#changeBucketAccess) | **PATCH** /api/v1/buckets/{bucket}/type/{permission} | change Bucket Access Policy
[**checkBucket**](BucketApi.md#checkBucket) | **GET** /api/v1/buckets/{bucket}/check-availability | Check Bucket availability
[**createBucket**](BucketApi.md#createBucket) | **POST** /api/v1/buckets | Create Bucket
[**destroyBucket**](BucketApi.md#destroyBucket) | **DELETE** /api/v1/buckets/{bucket} | Destroy Bucket
[**getBuckets**](BucketApi.md#getBuckets) | **GET** /api/v1/buckets | List all Buckets
[**getListPreviousBuckets**](BucketApi.md#getListPreviousBuckets) | **GET** /api/v1/buckets/migration/from | List storage service buckets
[**getMigrations**](BucketApi.md#getMigrations) | **GET** /api/v1/buckets/migrations | list migration operation
[**getSingleBuckets**](BucketApi.md#getSingleBuckets) | **GET** /api/v1/buckets/{bucket} | Get Single Buckets
[**migratingBuckets**](BucketApi.md#migratingBuckets) | **POST** /api/v1/buckets/migrates | Migrating buckets
[**upgradeBucket**](BucketApi.md#upgradeBucket) | **PATCH** /api/v1/buckets/{bucket}/upgrade/{plan} | Upgrade Bucket


# **changeBucketAccess**
> ChangeBucketAccess200Response changeBucketAccess()

Change Bucket Access policy on an object storage ( public / private )

### Example


```typescript
objectStorage.BucketApi.changeBucketAccess('bucket-example', 'permission-example')
  .then(res => {
      console.log(res);
  })
  .catch(err => {
      console.error(err);
  });

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined
 **permission** | [**string**] |  | defaults to undefined


### Return type

**ChangeBucketAccess200Response**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Bad Request |  -  |
**401** | Missing authentication |  -  |
**404** | Not Found |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **checkBucket**
> CreateBucket201Response checkBucket()

Check if you can create Bucket with specified Name.

### Example


```typescript
objectStorage.BucketApi.checkBucket('bucket-name')
  .then(res => {
      console.log(res);
  })
  .catch(err => {
      console.error(err);
  });

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined


### Return type

**CreateBucket201Response**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Bad Request |  -  |
**401** | Missing authentication |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **createBucket**
> CreateBucket201Response createBucket(body)

creates a new bucket on an object storage

### Example


```typescript
const body = {
    name: 'name-example',
    plan: 'plan-example',
    permission: 'permission-example',
};

objectStorage.BucketApi.createBucket(body)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    });

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateBucket**| create bucket. Acceptable values for permission: ( private / public ) and for plan: ( 20g, 40g, 80g, 160g ) |


### Return type

**CreateBucket201Response**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | successful operation |  -  |
**400** | Bad Request |  -  |
**401** | Missing authentication |  -  |
**409** | Conflict |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **destroyBucket**
> void destroyBucket()

Delete Bucket on an object storage

### Example


```typescript
objectStorage.BucketApi.destroyBucket('bocket-example')
  .then(res => {
      console.log('Operation successfully');
  })
  .catch(err => {
      console.error(err);
  });

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[jwt](../../README.md#jwt)

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

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getBuckets**
> ListBucket getBuckets()

List all Bucket

### Example


```typescript
objectStorage.BucketApi.getBuckets()
  .then(res => {
      console.log(res);
  })
  .catch(err => {
      console.error(err);
  });

```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListBucket**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**401** | Missing authentication |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getListPreviousBuckets**
> void getListPreviousBuckets()

List previous buckets of storage service in liara.

### Example


```typescript
objectStorage.BucketApi.getListPreviousBuckets()
  .then(res => {
      console.log(res);
  })
  .catch(err => {
      console.error(err);
  });

```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[jwt](../../README.md#jwt)

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

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getMigrations**
> GetMigrations200Response getMigrations()

list migration operation

### Example


```typescript
objectStorage.BucketApi.getMigrations()
  .then(res => {
      console.log(res);
  })
  .catch(err => {
      console.error(err);
  });

```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetMigrations200Response**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Bad Request |  -  |
**401** | Missing authentication |  -  |
**404** | Not Found |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getSingleBuckets**
> GetSingleBuckets200Response getSingleBuckets()


### Example


```typescript
objectStorage.BucketApi.getSingleBuckets('bucket-example')
  .then(res => {
      console.log(res);
  })
  .catch(err => {
      console.error(err);
  });

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined


### Return type

**GetSingleBuckets200Response**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**401** | Missing authentication |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **migratingBuckets**
> void migratingBuckets(body)

Move data from one bucket to another

### Example


```typescript
const body = {
    _from: '_from-example',
    to: 'to-example',
    path: 'path-example',
};

objectStorage.BucketApi.migratingBuckets(body)
    .then(res => {
        console.log('Operation successfully');
    })
    .catch(err => {
        console.error(err);
    });

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **MigrateBucket**| Migrate buckets |


### Return type

**void**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Bad Request |  -  |
**401** | Missing authentication |  -  |
**404** | Not Found |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **upgradeBucket**
> UpgradeBucket200Response upgradeBucket()

Upgrade Bucket plan ( just make space bigger )

### Example


```typescript
objectStorage.BucketApi.upgradeBucket('bucket-example', 'plan-example')
  .then(res => {
      console.log(res);
  })
  .catch(err => {
      console.error(err);
  });

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] |  | defaults to undefined
 **plan** | [**string**] |  | defaults to undefined


### Return type

**UpgradeBucket200Response**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


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

[[Back to top]](#) [[Back to README]](./../../README.md)


