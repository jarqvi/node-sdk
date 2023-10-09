# MessagesApi

All URIs are relative to *https://mail-service.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateTemporary**](MessagesApi.md#generateTemporary) | **POST** /api/v1/mails/{mailServerID}/messages/{messageID}/temporary-access | generate temporary access to email html
[**getAllMails**](MessagesApi.md#getAllMails) | **GET** /api/v1/mails/{mailServerID}/messages | get all mails
[**getSingleMail**](MessagesApi.md#getSingleMail) | **GET** /api/v1/mails/{mailServerID}/messages/{messageID} | get single mail
[**getSingleMailHtml**](MessagesApi.md#getSingleMailHtml) | **GET** /api/v1/mails/{mailServerID}/messages/{messageID}/render | get single mail html
[**sendMail**](MessagesApi.md#sendMail) | **POST** /api/v1/mails/{mailServerID}/messages | send a mail


# **generateTemporary**
> TmpAccess generateTemporary()


### Example


```typescript
mail.MessagesApi.generateTemporary('mail-server-id', 'message-id', 1)
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
 **expiration** | [**number**] | Specifying hourly expiration schedule options | (optional) defaults to 1


### Return type

**TmpAccess**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Generate token limitation |  -  |
**404** | Mail Server or Mail Message not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getAllMails**
> MailMessages getAllMails()


### Example


```typescript
const direction = 'incoming'; // or 'outgoing'
const state = "state-example";
const subject = "subject-example";
const _from = "from-example";
const to = "to-example";

mail.MessagesApi.getAllMails('mail-server-id', direction, 1, 15, state, subject, _from, to)
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
 **direction** | [**&#39;incoming&#39; | &#39;outgoing&#39;**]**Array<&#39;incoming&#39; &#124; &#39;outgoing&#39;>** |  | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to 1
 **count** | [**number**] |  | (optional) defaults to 15
 **state** | [**string**] |  | (optional) defaults to undefined
 **subject** | [**string**] |  | (optional) defaults to undefined
 **_from** | [**string**] |  | (optional) defaults to undefined
 **to** | [**string**] |  | (optional) defaults to undefined


### Return type

**MailMessages**

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
**404** | Mail Server not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getSingleMail**
> GetSingleMail200Response getSingleMail()


### Example


```typescript
mail.MessagesApi.getSingleMail('mail-server-id', 'message-id')
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

**GetSingleMail200Response**

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

# **getSingleMailHtml**
> void getSingleMailHtml()


### Example


```typescript
mail.MessagesApi.getSingleMailHtml('mail-server-id', 'message-id', 'token')
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
 **token** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success and returns some html text |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Mail Server or Mail Message not found |  -  |
**409** | Account already taken. |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **sendMail**
> PostMails201Response sendMail()


### Example


```typescript
const body = {
    html: 'html-example',
    text: 'text-example',
    subject: 'subject-example',
    to: 'to-example',
    _from: '-from-example',
    replyTo: 'replyTo-example',
    attachments: [
        {
            name: 'name-example',
            contentType: 'contentType-example',
            data: 'data-example',
        },
    ],
};

mail.MessagesApi.sendMail('mail-server-id', body)
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
 **body** | **Model3**|  |
 **mailServerID** | [**string**] |  | defaults to undefined


### Return type

**PostMails201Response**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**403** | No valid dns records exists for this mail server |  -  |
**404** | Mail Server not found |  -  |
**406** | The source and destination addresses must not be the same |  -  |
**429** | Too mnay requests |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)


