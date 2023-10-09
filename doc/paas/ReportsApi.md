# ReportsApi

All URIs are relative to *https://api.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppCpuReports**](ReportsApi.md#getAppCpuReports) | **GET** /v1/projects/{name}/metrics/cpu | Get cpu reports of app
[**getAppMemoryReports**](ReportsApi.md#getAppMemoryReports) | **GET** /v1/projects/{name}/metrics/memory | Get memory reports of app
[**getAppNetworkReceiveReports**](ReportsApi.md#getAppNetworkReceiveReports) | **GET** /v1/projects/{name}/metrics/network-receive | Get network-receive reports of app
[**getAppSummaryReports**](ReportsApi.md#getAppSummaryReports) | **GET** /v1/projects/{name}/metrics/summary | Get summary reports of app
[**getNetworkTransmitReports**](ReportsApi.md#getNetworkTransmitReports) | **GET** /v1/projects/{name}/metrics/network-transmit | Get network-transmit reports of app


# **getAppCpuReports**
> Reports getAppCpuReports()

get cpu reports of app that user owns

### Example


```typescript
const since = 1354654789; // example

paas.PReportsApi.getAppCpuReports('name-example', since)
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
 **since** | [**number**] | The since of your cpu reports | defaults to undefined


### Return type

**Reports**

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

# **getAppMemoryReports**
> Reports getAppMemoryReports()

get memory reports of app that user owns

### Example


```typescript
const since = 1354654789; // example

paas.PReportsApi.getAppMemoryReports('name-example', since)
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
 **since** | [**number**] | The since of your memory reports | defaults to undefined


### Return type

**Reports**

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

# **getAppNetworkReceiveReports**
> Reports getAppNetworkReceiveReports()

get network-receive reports of app that user owns

### Example


```typescript
const since = 1354654789; // example

paas.PReportsApi.getAppNetworkReceiveReports('name-example', since)
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
 **since** | [**number**] | The since of your network-receive reports | defaults to undefined


### Return type

**Reports**

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

# **getAppSummaryReports**
> GetAppSummaryReports200Response getAppSummaryReports()

get summary reports of app that user owns

### Example


```typescript
paas.PReportsApi.getAppSummaryReports('name-example')
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

**GetAppSummaryReports200Response**

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

# **getNetworkTransmitReports**
> Reports getNetworkTransmitReports()

get network-transmit reports of app that user owns

### Example


```typescript
const since = 1354654789; // example

paas.PReportsApi.getNetworkTransmitReports('name-example', since)
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
 **since** | [**number**] | The since of your network-transmit reports | defaults to undefined


### Return type

**Reports**

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


