# EventApi

All URIs are relative to *https://mail-service.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllEvents**](EventApi.md#getAllEvents) | **GET** /api/v1/mails/{mailServerID}/messages/{messageID}/events | get all events for message


# **getAllEvents**
> MailEvents getAllEvents()


### Example


```typescript
mail.EventApi.getAllEvents('mail-server-id', 'message-id', 1, 15)
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
 **mailServerID** | [**string**] |  | defaults to undefined
 **messageID** | [**string**] |  | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to 1
 **count** | [**number**] |  | (optional) defaults to 15


### Return type

**MailEvents**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server or Mail Message not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)


