# AppsApi

All URIs are relative to *https://api.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changePlan**](AppsApi.md#changePlan) | **POST** /v1/projects/{name}/resize | Change plan
[**createApp**](AppsApi.md#createApp) | **POST** /v1/projects | Create a app
[**deleteAppByName**](AppsApi.md#deleteAppByName) | **DELETE** /v1/projects/{name} | Delete a app
[**getAppApplets**](AppsApi.md#getAppApplets) | **GET** /v1/projects/{name}/applets | Get applets of app
[**getAppByName**](AppsApi.md#getAppByName) | **GET** /v1/projects/{name} | Get details of a project
[**getAppLogs**](AppsApi.md#getAppLogs) | **GET** /v1/projects/{name}/logs?since&#x3D;{since} | Get logs of app
[**getAppReleases**](AppsApi.md#getAppReleases) | **GET** /v1/projects/{name}/releases?page&#x3D;{page}&amp;count&#x3D;{count} | Get releases of app
[**getApps**](AppsApi.md#getApps) | **GET** /v1/projects | Get details of all projects
[**restartApp**](AppsApi.md#restartApp) | **POST** /v1/projects/{name}/actions/restart | To restart a app
[**turnApp**](AppsApi.md#turnApp) | **POST** /v1/projects/{name}/actions/scale | Turn on or off a app


# **changePlan**
> void changePlan(plan)

create app that user owns

### Example


```typescript
const body = {
    planID: 'plan-example'
};

paas.AppsApi.changePlan('name-example', body)
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
 **plan** | **ChangePlanRequest**| The plan of your app |
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
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **createApp**
> void createApp(createApp)

create app that user owns

### Example


```typescript
const body = {
    name: 'name-example',
    planID: 'planID-example',
    platform: 'platform-example',
};

paas.AppsApi.createApp(body)
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
 **createApp** | **CreateApp**|  |


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
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **deleteAppByName**
> void deleteAppByName()

delete app that user owns

### Example


```typescript
paas.AppsApi.deleteAppByName('name-example')
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
 **name** | [**string**] | The name of the app to delete | defaults to undefined


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
**200** | Your request has been submitted. |  -  |
**204** | App deleted. |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getAppApplets**
> Applets getAppApplets()

get applets of app that user owns

### Example


```typescript
paas.AppsApi.getAppApplets('name-example')
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
 **name** | [**string**] | The name of your app | defaults to undefined


### Return type

**Applets**

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

# **getAppByName**
> ProjectAllDetails getAppByName()

get all details of all project that user owns

### Example


```typescript
ipaas.AppsApi.getAppByName('name-example')
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
 **name** | [**string**] | The name of your app | defaults to undefined


### Return type

**ProjectAllDetails**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getAppLogs**
> void getAppLogs()

get logs of app that user owns

### Example


```typescript
paas.AppsApi.getAppLogs('name-example', 'since-example')
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
 **name** | [**string**] | The name of your app | defaults to undefined
 **since** | [**string**] | Show logs since timestamp | defaults to undefined


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

# **getAppReleases**
> Releases getAppReleases()

get releases of app that user owns

### Example


```typescript
paas.AppsApi.getAppReleases('name-example', 1, 10)
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
 **name** | [**string**] | The name of your app | defaults to undefined
 **page** | [**number**] | The page of your releases | defaults to 1.0
 **count** | [**number**] | The count of your releases | defaults to 10.0


### Return type

**Releases**

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

# **getApps**
> Projects getApps()

get all details of all projects that user owns

### Example


```typescript
paas.AppsApi.getApps()
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

**Projects**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **restartApp**
> void restartApp()

to restart app that user owns

### Example


```typescript
paas.AppsApi.restartApp('name-example')
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
 **name** | [**string**] | The name of the app to restart | defaults to undefined


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
**200** | Your request has been submitted. |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **turnApp**
> void turnApp(scale)

turn on or off a app that user owns

### Example


```typescript
const body = {
    scale: 1
};

paas.AppsApi.turnApp('name-example', body)
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
 **scale** | **TurnAppRequest**| Return 1 to turn on or 0 to turn off |
 **name** | [**string**] | The name of the app to turn on or off | defaults to undefined


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
**200** | Your request has been submitted. |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)