# DisksApi

All URIs are relative to *https://api.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBackup**](DisksApi.md#createBackup) | **POST** /v1/projects/{id}/disks/{name}/backups | Create backup disk
[**createDisk**](DisksApi.md#createDisk) | **POST** /v1/projects/{name}/disks | Create a disk
[**createFtp**](DisksApi.md#createFtp) | **POST** /v1/projects/{name}/disks/{dname}/ftp | Create ftp
[**deleteDisk**](DisksApi.md#deleteDisk) | **DELETE** /v1/projects/{id}/disks/{name} | Delete a disk
[**deleteFtp**](DisksApi.md#deleteFtp) | **DELETE** /v1/ftp/{fname} | Delete a ftp
[**downloadBackup**](DisksApi.md#downloadBackup) | **POST** /v1/projects/{id}/disks/{dname}/backups/manual/{bname}/download | Download backup disk
[**getBackups**](DisksApi.md#getBackups) | **GET** /v1/projects/{id}/disks/{name}/backups | Get backups disk
[**getDisks**](DisksApi.md#getDisks) | **GET** /v1/projects/{id}/disks | Get disks
[**getFtps**](DisksApi.md#getFtps) | **GET** /v1/projects/{name}/disks/{dname}/ftp | Get ftps
[**resizeDisk**](DisksApi.md#resizeDisk) | **POST** /v1/projects/{name}/disks/{dname}/resize | Resize disk


# **createBackup**
> void createBackup()

create backup disk that user owns

### Example


```typescript
paas.DisksApi.createBackup('id-example', 'name-example')
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
 **id** | [**string**] | The id of your app | defaults to undefined
 **name** | [**string**] | The name of your disk | defaults to undefined


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
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **createDisk**
> void createDisk(disk)

create a disk that user owns

### Example


```typescript
const body = {
    name: 'name-example',
    size: 'size-example',
};

paas.DisksApi.createDisk('name-example', body)
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
 **disk** | **CreateDiskRequest**| The disk of your app |
 **name** | [**string**] | The name of your app | defaults to undefined


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
**201** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **createFtp**
> CreateFtp200Response createFtp(createFtp)

create ftp that user owns

### Example


```typescript
const body = {
  username: 'username-example',
  readOnly: true,
};

paas.DisksApi.createFtp('name-example', 'dname-example', body)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  })

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFtp** | **CreateFtpRequest**| The plan of your app |
 **name** | [**string**] | The name of your app | defaults to undefined
 **dname** | [**string**] | The name of your disk | defaults to undefined


### Return type

**CreateFtp200Response**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **deleteDisk**
> void deleteDisk()

delete a disk that user owns

### Example


```typescript
paas.DisksApi.deleteDisk('id-example', 'name-example')
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
 **id** | [**string**] | The id of your app | defaults to undefined
 **name** | [**string**] | The name of your disk of app | defaults to undefined


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
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **deleteFtp**
> void deleteFtp()

delete a ftp that user owns

### Example


```typescript
paas.DisksApi.deleteFtp('fname-example')
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
 **fname** | [**string**] | The name of your ftp | defaults to undefined


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
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **downloadBackup**
> DownloadBackup200Response downloadBackup()

download backup disk that user owns

### Example


```typescript
paas.DisksApi.downloadBackup('id-example', 'dname-example', 'bname_example')
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
 **id** | [**string**] | The id of your app | defaults to undefined
 **dname** | [**string**] | The name of your disk | defaults to undefined
 **bname** | [**string**] | The name of your backup | defaults to undefined


### Return type

**DownloadBackup200Response**

### Authorization

[jwt](../../README.md#jwt)

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

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getBackups**
> GetDiskBackup getBackups()

get backups disk that user owns

### Example


```typescript
paas.DisksApi.getBackups('id-example', 'name-example')
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
 **id** | [**string**] | The id of your app | defaults to undefined
 **name** | [**string**] | The name of your disk | defaults to undefined


### Return type

**GetDiskBackup**

### Authorization

[jwt](../../README.md#jwt)

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

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getDisks**
> GetDisks getDisks()

get disks that user owns

### Example


```typescript
paas.DisksApi.getDisks('id-example')
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
 **id** | [**string**] | The id of your app | defaults to undefined


### Return type

**GetDisks**

### Authorization

[jwt](../../README.md#jwt)

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

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getFtps**
> GetFtps200Response getFtps()

get ftps that user owns

### Example


```typescript
paas.DisksApi.getFtps('name-example', 'dname-example')
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  })

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of your app | defaults to undefined
 **dname** | [**string**] | The name of your disk | defaults to undefined


### Return type

**GetFtps200Response**

### Authorization

[jwt](../../README.md#jwt)

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

[[Back to top]](#) [[Back to README]](./../../README.md)

# **resizeDisk**
> void resizeDisk(resizeDisk)

resize disk that user owns

### Example


```typescript
const body = {
  size: 'size-example'
};

paas.DisksApi.resizeDisk('name-example', 'dname-example', body)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  })

```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resizeDisk** | **ResizeDiskRequest**| The size of your disk |
 **name** | [**string**] | The name of your app | defaults to undefined
 **dname** | [**string**] | The name of your disk | defaults to undefined


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
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)


