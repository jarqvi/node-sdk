# ObjectApi

All URIs are relative to *https://storage-service.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteObject**](ObjectApi.md#deleteObject) | **DELETE** /api/v1/buckets/{bucket}/objects/{prefix} | Delete Object
[**downloadObject**](ObjectApi.md#downloadObject) | **GET** /api/v1/buckets/{bucket}/download/${object} | Download Object
[**getListObjects**](ObjectApi.md#getListObjects) | **GET** /api/v1/buckets/{bucket}/objects/{prefix} | List Objects
[**getStatObject**](ObjectApi.md#getStatObject) | **GET** /api/v1/buckets/{bucket}/objects/statistics/{object} | Get Stat Object
[**uploadObject**](ObjectApi.md#uploadObject) | **GET** /api/v1/buckets/{bucket}/upload/{object} | Upload Object


# **deleteObject**
> void deleteObject()

Delete an object from storage

### Example


```typescript
objectStorage.ObjectApi.deleteObject('bucket-example', 'prefix-example')
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
 **prefix** | [**string**] |  | defaults to undefined


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
**409** | Conflict |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **downloadObject**
> DownloadObject200Response downloadObject()

Return presigned url for download object

### Example


```typescript
objectStorage.ObjectApi.downloadObject('bucket-example', 'object-example', 'expiry-example')
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
 **object** | [**string**] | specify object path | defaults to undefined
 **expiry** | [**string**] | example: 2 days 7 hours 45 minutes | (optional) defaults to undefined


### Return type

**DownloadObject200Response**

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

# **getListObjects**
> Objects getListObjects()

Return list of objects ( max:50, min:1 )

### Example


```typescript
objectStorage.ObjectApi.getListObjects('bucket-example', 'prefix-example', '10', '1')
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
 **prefix** | [**string**] |  | defaults to undefined
 **number** | [**string**] | specify number of object ( max: 50, min: 1 ) | (optional) defaults to undefined
 **page** | [**string**] |  | (optional) defaults to undefined


### Return type

**Objects**

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

# **getStatObject**
> Stat getStatObject()


### Example


```typescript
objectStorage.ObjectApi.getStatObject('bucket-example', 'object-example')
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
 **object** | [**string**] |  | defaults to undefined


### Return type

**Stat**

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

# **uploadObject**
> DownloadObject200Response uploadObject()

Return presigned url for download object

### Example


```typescript
objectStorage.ObjectApi.uploadObject('bucket-example', 'object-example')
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
 **object** | [**string**] | specify object path | defaults to undefined


### Return type

**DownloadObject200Response**

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


