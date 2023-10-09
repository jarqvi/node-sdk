# MailsApi

All URIs are relative to *https://mail-service.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeMailServerPlan**](MailsApi.md#changeMailServerPlan) | **PUT** /api/v1/mails/{mailServerID}/plans | change mail server plan
[**checkDomainAvailable**](MailsApi.md#checkDomainAvailable) | **GET** /api/v1/mails/{domain}/check-availability | check if domain name is available
[**checkMailServerDnsStatus**](MailsApi.md#checkMailServerDnsStatus) | **GET** /api/v1/mails/{mailServerID}/dns-check | mail server check dns status
[**deleteMailServer**](MailsApi.md#deleteMailServer) | **DELETE** /api/v1/mails/{mailServerID} | delete mail server
[**editMailServer**](MailsApi.md#editMailServer) | **PATCH** /api/v1/mails/{mailServerID} | edit mail server
[**getCountFreeMails**](MailsApi.md#getCountFreeMails) | **GET** /api/v1/mails/{mailServerID}/remaining-free-emails | count number of free mails every month
[**getCountMails**](MailsApi.md#getCountMails) | **GET** /api/v1/mails/{mailServerID}/counts | count number of sent mails every day
[**getMails**](MailsApi.md#getMails) | **GET** /api/v1/mails | get all mail servers
[**getSingleMailServer**](MailsApi.md#getSingleMailServer) | **GET** /api/v1/mails/{mailServerID} | get single mail server
[**postMails**](MailsApi.md#postMails) | **POST** /api/v1/mails | create mail server


# **changeMailServerPlan**
> PostMails201Response changeMailServerPlan()


### Example


```typescript
const body = {
    plan: "plan-example"
};

mail.MailsApi.changeMailServerPlan('mail-server-id', body)
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
 **body** | **Model10**|  |
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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server or Mail Account not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **checkDomainAvailable**
> PostMails201Response checkDomainAvailable()


### Example


```typescript
mail.MailsApi.checkDomainAvailable('domain-example')
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
 **domain** | [**string**] |  | defaults to undefined


### Return type

**PostMails201Response**

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
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **checkMailServerDnsStatus**
> CheckDNS checkMailServerDnsStatus()


### Example


```typescript
mail.MailsApi.checkMailServerDnsStatus('mail-server-id')
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

**CheckDNS**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Mail Server not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **deleteMailServer**
> void deleteMailServer()


### Example


```typescript
mail.MailsApi.deleteMailServer('mail-server-id')
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
**404** | Mail Server not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **editMailServer**
> PostMails201Response editMailServer()


### Example


```typescript
const body = {
    mode: "DEV",
    inboundSpamThreshold: 0
};

// @ts-ignore
mail.MailsApi.editMailServer('mail-server-id', body)
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
 **body** | **Model8**|  |
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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getCountFreeMails**
> RemainingFreeMails getCountFreeMails()


### Example


```typescript
mail.MailsApi.getCountFreeMails('mail-server-id')
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

**RemainingFreeMails**

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

# **getCountMails**
> CountMailPerDay getCountMails()


### Example


```typescript
mail.MailsApi.getCountMails('mail-server-id', 30)
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
 **lastNDays** | [**number**] |  | (optional) defaults to 30


### Return type

**CountMailPerDay**

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

# **getMails**
> MailServers getMails()


### Example


```typescript
mail.MailsApi.getMails()
  .then(res => {
      console.log(res);
  })
  .catch(err => {
      console.error(err);
  });

```


### Parameters
This endpoint does not need any parameter.


### Return type

**MailServers**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getSingleMailServer**
> MailServer getSingleMailServer()


### Example


```typescript
mail.MailsApi.getSingleMailServer('mail-server-id')
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

**MailServer**

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

# **postMails**
> PostMails201Response postMails()


### Example


```typescript
const body = {
    plan: 'plan-example',
    domain: 'domain-example',
    mode: 'DEV'
};

// @ts-ignore
mail.MailsApi.postMails(body)
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
 **body** | **Model1**|  |


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
**400** | Invalid request for plan |  -  |
**402** | Not enough balance |  -  |
**403** | Allowed to create only one Mail Server on the free plan |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)


