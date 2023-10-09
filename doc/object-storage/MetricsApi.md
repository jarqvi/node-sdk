# MetricsApi

All URIs are relative to *https://storage-service.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHisotricalMetrics**](MetricsApi.md#getHisotricalMetrics) | **GET** /api/v1/buckets/{bucket}/metrics/historical | hisotrical metrics
[**getMetricsSummary**](MetricsApi.md#getMetricsSummary) | **GET** /api/v1/buckets/{bucket}/metrics/summary | metrics summary


# **getHisotricalMetrics**
> GetHisotricalMetrics200Response getHisotricalMetrics()


### Example


```typescript
objectStorage.MetricsApi.getHisotricalMetrics('bucket-example', 'sicne-example')
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
 **since** | [**string**] | unix time | defaults to undefined


### Return type

**GetHisotricalMetrics200Response**

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

# **getMetricsSummary**
> GetMetricsSummary200Response getMetricsSummary()


### Example


```typescript
objectStorage.MetricsApi.getMetricsSummary('bucket-example')
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

**GetMetricsSummary200Response**

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


