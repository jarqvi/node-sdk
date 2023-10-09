# AccountsApi

All URIs are relative to *https://mail-service.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkMailAvailable**](AccountsApi.md#checkMailAvailable) | **GET** /api/v1/mails/{mailServerID}/accounts/{accountName}/check-availability | check if mail account is available
[**createMailACcount**](AccountsApi.md#createMailACcount) | **POST** /api/v1/mails/{mailServerID}/accounts | add mail account
[**deleteMailAccount**](AccountsApi.md#deleteMailAccount) | **DELETE** /api/v1/mails/{mailServerID}/accounts/{accountID} | delete mail account
[**getAllMailAccounts**](AccountsApi.md#getAllMailAccounts) | **GET** /api/v1/mails/{mailServerID}/accounts | get all mail accounts


# **checkMailAvailable**
> PostMails201Response checkMailAvailable()


### Example


```typescript
mail.AccountsApi.checkMailAvailable('mail-server-id', 'account-name')
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
 **accountName** | [**string**] |  | defaults to undefined


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
**404** | Mail Server not found |  -  |
**409** | Account already taken. |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **createMailACcount**
> PostMails201Response createMailACcount()


### Example


```typescript
const body = {
    name: "name-example",
};

mail.AccountsApi.createMailACcount('mail-server-id', body)
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
 **body** | **Model5**|  |
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

# **deleteMailAccount**
> void deleteMailAccount()


### Example


```typescript
mail.AccountsApi.deleteMailAccount('mail-server-id', 'account-id')
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
 **accountID** | [**string**] |  | defaults to undefined


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
**404** | Mail Server or Mail Account not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getAllMailAccounts**
> MailAccounts getAllMailAccounts()


### Example


```typescript
mail.AccountsApi.getAllMailAccounts('mail-server-id')
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

**MailAccounts**

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


