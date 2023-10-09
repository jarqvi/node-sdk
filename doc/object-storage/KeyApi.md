# KeyApi

All URIs are relative to *https://storage-service.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createKey**](KeyApi.md#createKey) | **POST** /api/v1/keys | Create Keys
[**deleteKey**](KeyApi.md#deleteKey) | **DELETE** /api/v1/keys/{key} | Delete Key
[**getKey**](KeyApi.md#getKey) | **GET** /api/v1/keys/{key} | Get Key
[**getListKeys**](KeyApi.md#getListKeys) | **GET** /api/v1/keys | Get List of Keys
[**revokeSecretKey**](KeyApi.md#revokeSecretKey) | **PATCH** /api/v1/keys/{key}/revoke | Revoke secret key
[**updateKey**](KeyApi.md#updateKey) | **PATCH** /api/v1/keys/{key} | Update key


# **createKey**
> CreateKey201Response createKey(body)

Create access and secret key

### Example


```typescript
const body = {
    buckets: [
        {}
    ],
    description: "description-example"
};

objectStorage.KeyApi.createKey(body)
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
 **body** | **CreateKey**| Declare Buckets for access key |


### Return type

**CreateKey201Response**

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
**404** | Not Found |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **deleteKey**
> void deleteKey()

Delete access key

### Example


```typescript
objectStorage.KeyApi.deleteKey('key-example')
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
 **key** | [**string**] |  | defaults to undefined


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

# **getKey**
> void getKey()

Get a key

### Example


```typescript
objectStorage.KeyApi.getKey('key-example')
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
 **key** | [**string**] |  | defaults to undefined


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

# **getListKeys**
> Keys getListKeys()


### Example


```typescript
objectStorage.KeyApi.getListKeys()
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

**Keys**

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

# **revokeSecretKey**
> RevokeSecretKey200Response revokeSecretKey()

Revoke secret key

### Example


```typescript
objectStorage.KeyApi.revokeSecretKey('key-example')
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
 **key** | [**string**] |  | defaults to undefined


### Return type

**RevokeSecretKey200Response**

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

# **updateKey**
> CreateBucket201Response updateKey(body)

Update buckets of key ( redefine )

### Example


```typescript
const body = {
    buckets: [
        {}
    ],
    description: "description-example"
};

objectStorage.KeyApi.updateKey('key-example', body)
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
 **body** | **CreateKey**| Declare Buckets for access key |
 **key** | [**string**] |  | defaults to undefined


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
**200** | successful operation |  -  |
**400** | Bad Request |  -  |
**401** | Missing authentication |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)


