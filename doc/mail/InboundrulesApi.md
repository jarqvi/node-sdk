# InboundrulesApi

All URIs are relative to *https://mail-service.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInboundRule**](InboundrulesApi.md#addInboundRule) | **POST** /api/v1/mails/{mailServerID}/inboundrules | add inbound rule.
[**deleteInboundRule**](InboundrulesApi.md#deleteInboundRule) | **DELETE** /api/v1/mail/{mailServerID}/inboundrules/{inboundruleID} | delete inbound rule.
[**getAllInboundRules**](InboundrulesApi.md#getAllInboundRules) | **GET** /api/v1/mails/{mailServerID}/inboundrules | get all inbound rules.


# **addInboundRule**
> PostMails201Response addInboundRule()


### Example


```typescript
const body = {
    rule: 'rule-example'
};

mail.InboundrulesApi.addInboundRule('mail-server-id', body)
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
 **model11** | **Model11**|  |
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
**404** | Mail Server not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **deleteInboundRule**
> void deleteInboundRule()


### Example


```typescript
mail.InboundrulesApi.deleteInboundRule('mail-server-id', 'inboundrule-id')
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
 **mailServerID** | [**string**] |  | defaults to undefined
 **inboundruleID** | [**string**] |  | defaults to undefined


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
**204** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server or Inbound rule not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getAllInboundRules**
> MailInboundRules getAllInboundRules()


### Example


```typescript
mail.InboundrulesApi.getAllInboundRules('mail-server-id')
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


### Return type

**MailInboundRules**

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
**409** | Rule already exists. |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)


