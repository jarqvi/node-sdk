# DatabasesApi

All URIs are relative to *https://api.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeControlPanel**](DatabasesApi.md#changeControlPanel) | **POST** /v1/databases/{id}/control-panel/{status} | Change control-panel status
[**changePublicNetwork**](DatabasesApi.md#changePublicNetwork) | **PATCH** /v1/databases/{id}/public-network/{status} | Change public network status
[**createDatabase**](DatabasesApi.md#createDatabase) | **POST** /v1/databases | Create a database
[**deleteDatabase**](DatabasesApi.md#deleteDatabase) | **DELETE** /v1/databases/{id} | Delete a database
[**getDatabase**](DatabasesApi.md#getDatabase) | **GET** /v1/databases/{id} | Get a database
[**getListDatabases**](DatabasesApi.md#getListDatabases) | **GET** /v1/databases | Get all databases
[**resizeDatabase**](DatabasesApi.md#resizeDatabase) | **POST** /v1/databases/{id}/resize | Resize a database
[**turnDatabase**](DatabasesApi.md#turnDatabase) | **POST** /v1/databases/{id}/actions/scale | Power on or power off a database



# **changeControlPanel**
> void changeControlPanel()

change control-panel status that user owns

### Example


```typescript
const status = 'enable'; // 'disable'

dbaas.DatabasesApi.changeControlPanel('id-example', status)
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
 **id** | [**string**] |  | defaults to undefined
 **status** | [**&#39;enable&#39; | &#39;disable&#39;**]**Array<&#39;enable&#39; &#124; &#39;disable&#39;>** |  | defaults to undefined


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
**404** | Database not found |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **changePublicNetwork**
> void changePublicNetwork()

change public network status that user owns

### Example


```typescript
const status = 'enable'; // 'disable'

dbaas.DatabasesApi.changePublicNetwork('id-example', status)
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
 **id** | [**string**] |  | defaults to undefined
 **status** | [**&#39;enable&#39; | &#39;disable&#39;**]**Array<&#39;enable&#39; &#124; &#39;disable&#39;>** |  | defaults to undefined


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
**404** | Database not found |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **createDatabase**
> void createDatabase(createADatabases)

create a database that user owns

### Example


```typescript
const body = {
    hostname: 'hostname-example',
    publicNetwork: true,
    type: 'type-example',
    planID: 'planID-example',
    version: 'version-example',
};

dbaas.DatabasesApi.createDatabase(body)
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
 **createADatabases** | **CreateDatabases**|  |


### Return type

**void**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Databaselication/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **deleteDatabase**
> void deleteDatabase()

delete a database that user owns

### Example


```typescript
dbaas.DatabasesApi.deleteDatabase('id-example')
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
 **id** | [**string**] |  | defaults to undefined


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
**404** | Database not found |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getDatabase**
> DBDetails getDatabase()

get a database that user owns

### Example


```typescript
dbaas.DatabasesApi.getDatabase('id-example')
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
 **id** | [**string**] |  | defaults to undefined


### Return type

**DBDetails**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Databaselication/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | Database not found |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getListDatabases**
> DBsDetails getListDatabases()

get all databases that user owns

### Example


```typescript
dbaas.DatabasesApi.getListDatabases()
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

**DBsDetails**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Databaselication/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **resizeDatabase**
> void resizeDatabase(resize)

resize a database that user owns

### Example


```typescript
const body = {
    disk: true,
    planID: 'planID-example',
};

dbaas.DatabasesApi.resizeDatabase('id-example', body)
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
 **resize** | **ResizeDatabaseRequest**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Databaselication/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | Database not found |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **turnDatabase**
> void turnDatabase(scale)

power on or power off a database that user owns

### Example


```typescript
const body = {
    scale: 1
};

dbaas.DatabasesApi.turnDatabase('id-example', body)
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
 **scale** | **TurnDatabaseRequest**| 1 for power on or 0 for power off |
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Databaselication/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | Database not found |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)