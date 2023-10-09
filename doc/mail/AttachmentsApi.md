# AttachmentsApi

All URIs are relative to *https://mail-service.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadAttachments**](AttachmentsApi.md#downloadAttachments) | **GET** /api/v1/mails/{mailServerID}/messages/{messageID}/attachments/{attachmentID} | download attachment
[**getAllAttachments**](AttachmentsApi.md#getAllAttachments) | **GET** /api/v1/mails/{mailServerID}/messages/{messageID}/attachments | get all attachments for message


# **downloadAttachments**
> DownloadAttachments200Response downloadAttachments()


### Example


```typescript
mail.AttachmentsApi.downloadAttachments('mail-server-id', 'attachment-id', 'message-id')
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
 **attachmentID** | [**string**] |  | defaults to undefined


### Return type

**DownloadAttachments200Response**

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

# **getAllAttachments**
> MailAttachments getAllAttachments()


### Example


```typescript
mail.AttachmentsApi.getAllAttachments('mail-server-id', 'message-id')
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


### Return type

**MailAttachments**

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
**409** | Account already taken. |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)


