# .EventApi

All URIs are relative to *https://mail-service.iran.liara.ir/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllEvents**](EventApi.md#getAllEvents) | **GET** /mails/{mailServerID}/messages/{messageID}/events | get all events for message


# **getAllEvents**
> MailEvents getAllEvents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventApi(configuration);

let body:.EventApiGetAllEventsRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // string
  messageID: "62ECB020842930cc01FFCCfe",
  // number (optional)
  page: 1,
  // number (optional)
  count: 15,
};

apiInstance.getAllEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined
 **messageID** | [**string**] |  | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to 1
 **count** | [**number**] |  | (optional) defaults to 15


### Return type

**MailEvents**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server or Mail Message not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


