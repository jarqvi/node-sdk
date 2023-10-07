# FolderApi

All URIs are relative to *https://storage-service.iran.liara.ir/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFolder**](FolderApi.md#createFolder) | **POST** /buckets/{bucket}/folders | Create Folder
[**deleteFolder**](FolderApi.md#deleteFolder) | **DELETE** /buckets/{bucket}/folders | Delete Folder


# **createFolder**
> void createFolder(body)

Create Folder in Bucket

### Example


```typescript
const body = {
    path: 'path-example',
};

objectStorage.FolderApi.createFolder('bucket-example', body)
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
 **body** | **CreateFolder**|  |
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
**201** | successful operation |  -  |
**400** | Bad Request |  -  |
**401** | Missing authentication |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **deleteFolder**
> void deleteFolder()

Delete Folder in Bucket

### Example


```typescript
objectStorage.FolderApi.deleteFolder('bucket-example', 'path-example')
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
 **path** | [**string**] |  | defaults to undefined


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