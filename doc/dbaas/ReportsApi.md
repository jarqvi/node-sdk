# ReportsApi

All URIs are relative to *https://api.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDatabaseCpuReports**](ReportsApi.md#getDatabaseCpuReports) | **GET** /v1/databases/{id}/metrics/cpu | Get cpu reports of database
[**getDatabaseMemoryReports**](ReportsApi.md#getDatabaseMemoryReports) | **GET** /v1/databases/{id}/metrics/memory | Get memory reports of database
[**getDatabaseNetworkReceiveReports**](ReportsApi.md#getDatabaseNetworkReceiveReports) | **GET** /v1/databases/{id}/metrics/network-receive | Get network-receive reports of database
[**getDatabaseNetworkTransmitReports**](ReportsApi.md#getDatabaseNetworkTransmitReports) | **GET** /v1/databases/{id}/metrics/network-transmit | Get network-transmit reports of database
[**getDatabaseSummaryReports**](ReportsApi.md#getDatabaseSummaryReports) | **GET** /v1/databases/{id}/metrics/summary | Get summary reports of database


# **getDatabaseCpuReports**
> Reports getDatabaseCpuReports()

get cpu reports of database that user owns

### Example


```typescript
const since = 1696214892; // example

  dbaas.DBReportsApi.getDatabaseCpuReports('id-example', since)
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
 **id** | [**string**] | The name of your database | defaults to undefined
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
**404** | Database does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getDatabaseMemoryReports**
> Reports getDatabaseMemoryReports()

get memory reports of database that user owns

### Example


```typescript
const since = 1696214892;

dbaas.DBReportsApi.getDatabaseMemoryReports('id-example', since)
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
 **id** | [**string**] | The name of your database | defaults to undefined
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
**404** | Database does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getDatabaseNetworkReceiveReports**
> Reports getDatabaseNetworkReceiveReports()

get network-receive reports of database that user owns

### Example


```typescript
const since = 1696214892;

dbaas.DBReportsApi.getDatabaseNetworkReceiveReports('id-example', since)
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
 **id** | [**string**] | The name of your database | defaults to undefined
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
**404** | Database does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getDatabaseNetworkTransmitReports**
> Reports getDatabaseNetworkTransmitReports()

get network-transmit reports of database that user owns

### Example


```typescript
const since = 1696214892;

dbaas.DBReportsApi.getDatabaseNetworkTransmitReports('id-example', since)
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
 **id** | [**string**] | The name of your database | defaults to undefined
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
**404** | Database does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getDatabaseSummaryReports**
> GetDatabaseSummaryReports200Response getDatabaseSummaryReports()

get summary reports of database that user owns

### Example


```typescript
dbaas.DBReportsApi.getDatabaseSummaryReports('id-example')
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
 **id** | [**string**] | The name of your database | defaults to undefined


### Return type

**GetDatabaseSummaryReports200Response**

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
**404** | Database does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)


