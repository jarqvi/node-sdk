# .DisksApi

All URIs are relative to *https://api.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBackup**](DisksApi.md#createBackup) | **POST** /v1/projects/{id}/disks/{name}/backups | Create backup disk
[**createDisk**](DisksApi.md#createDisk) | **POST** /v1/projects/{name}/disks | Create a disk
[**deleteDisk**](DisksApi.md#deleteDisk) | **DELETE** /v1/projects/{id}/disks/{name} | Delete a disk
[**downloadBackup**](DisksApi.md#downloadBackup) | **POST** /v1/projects/{id}/disks/{dname}/backups/manual/{bname}/download | Download backup disk
[**getBackups**](DisksApi.md#getBackups) | **GET** /v1/projects/{id}/disks/{name}/backups | Get backups disk
[**getDisks**](DisksApi.md#getDisks) | **GET** /v1/projects/{id}/disks | Get disks


# **createBackup**
> void createBackup()

create backup disk that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DisksApi(configuration);

let body:.DisksApiCreateBackupRequest = {
  // string | The id of your app
  id: "id_example",
  // string | The name of your disk
  name: "name_example",
};

apiInstance.createBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of your app | defaults to undefined
 **name** | [**string**] | The name of your disk | defaults to undefined


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

# **createDisk**
> void createDisk(disk)

create a disk that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DisksApi(configuration);

let body:.DisksApiCreateDiskRequest = {
  // string | The name of your app
  name: "name_example",
  // CreateDiskRequest | The disk of your app
  disk: {
    name: "name_example",
    size: "size_example",
  },
};

apiInstance.createDisk(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disk** | **CreateDiskRequest**| The disk of your app |
 **name** | [**string**] | The name of your app | defaults to undefined


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
**201** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDisk**
> void deleteDisk()

delete a disk that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DisksApi(configuration);

let body:.DisksApiDeleteDiskRequest = {
  // string | The id of your app
  id: "id_example",
  // string | The name of your disk of app
  name: "name_example",
};

apiInstance.deleteDisk(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of your app | defaults to undefined
 **name** | [**string**] | The name of your disk of app | defaults to undefined


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

# **downloadBackup**
> void downloadBackup()

download backup disk that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DisksApi(configuration);

let body:.DisksApiDownloadBackupRequest = {
  // string | The id of your app
  id: "id_example",
  // string | The name of your disk
  dname: "dname_example",
  // string | The name of your backup
  bname: "bname_example",
};

apiInstance.downloadBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of your app | defaults to undefined
 **dname** | [**string**] | The name of your disk | defaults to undefined
 **bname** | [**string**] | The name of your backup | defaults to undefined


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

# **getBackups**
> void getBackups()

get backups disk that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DisksApi(configuration);

let body:.DisksApiGetBackupsRequest = {
  // string | The id of your app
  id: "id_example",
  // string | The name of your disk
  name: "name_example",
};

apiInstance.getBackups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of your app | defaults to undefined
 **name** | [**string**] | The name of your disk | defaults to undefined


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

# **getDisks**
> void getDisks()

get disks that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DisksApi(configuration);

let body:.DisksApiGetDisksRequest = {
  // string | The id of your app
  id: "id_example",
};

apiInstance.getDisks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of your app | defaults to undefined


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


