# CheckNameServersApi

All URIs are relative to *https://dns-service.iran.liara.ir/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkNameServer**](CheckNameServersApi.md#checkNameServer) | **PUT** /zones/{zone}/check | check nameserver


# **checkNameServer**
> Submitted checkNameServer()

check nameserver of zone

### Example


```typescript
dns.CheckNameServersApi.checkNameServer('zone-example')
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
 **zone** | [**string**] | The name of the zone to check status | defaults to undefined


### Return type

**Submitted**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |
**400** | bad request maybe validation error on zone name |  -  |
**401** | Missing authentication |  -  |
**404** | Zone does not exists or its status is not pending |  -  |
**406** | Please try later. |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)