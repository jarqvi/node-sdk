# ForwardApi

All URIs are relative to *https://mail-service.iran.liara.ir/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAddressForwarding**](ForwardApi.md#createAddressForwarding) | **POST** /mails/{mailServerID}/accounts/{accountID}/forwards | add address endpoint to forwarding mails
[**deleteExtraEndpoint**](ForwardApi.md#deleteExtraEndpoint) | **DELETE** /mails/{mailServerID}/accounts/{accountID}/forwards/{addressID} | delete extra endpoint address
[**getListAddressForwarding**](ForwardApi.md#getListAddressForwarding) | **GET** /mails/{mailServerID}/accounts/{accountID}/forwards | get all extra address to forwarding mails


# **createAddressForwarding**
> void createAddressForwarding()


### Example


```typescript
const body = {
    address: "address-example",
};

mail.ForwardApi.createAddressForwarding('mail-server-id', 'account-id', body)
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
 **body** | **Model6**|  |
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
**201** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Max number of forwarders |  -  |
**404** | Mail Server or Mail Account not found |  -  |
**409** | Address endpoint already exists |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **deleteExtraEndpoint**
> void deleteExtraEndpoint()


### Example


```typescript
mail.ForwardApi.deleteExtraEndpoint('mail-server-id', 'account-id', 'address-id')
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
 **accountID** | [**string**] |  | defaults to undefined
 **addressID** | [**string**] |  | defaults to undefined


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
**404** | Mail Server or Mail Account or Mail Forward not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getListAddressForwarding**
> MailForwards getListAddressForwarding()


### Example


```typescript
mail.ForwardApi.getListAddressForwarding('mail-server-id', 'account-id')
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
 **accountID** | [**string**] |  | defaults to undefined


### Return type

**MailForwards**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server or Mail Account not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)