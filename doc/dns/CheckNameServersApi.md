# .CheckNameServersApi

All URIs are relative to *https://dns-service.iran.liara.ir/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkNameServer**](CheckNameServersApi.md#checkNameServer) | **PUT** /zones/{zone}/check | check nameserver


# **checkNameServer**
> Submitted checkNameServer()

check nameserver of zone

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CheckNameServersApi(configuration);

let body:.CheckNameServersApiCheckNameServerRequest = {
  // string | The name of the zone to check status
  zone: "zone_example",
};

apiInstance.checkNameServer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zone** | [**string**] | The name of the zone to check status | defaults to undefined


### Return type

**Submitted**

### Authorization

[jwt](README.md#jwt)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


