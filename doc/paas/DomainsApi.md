# DomainsApi

All URIs are relative to *https://api.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkDomain**](DomainsApi.md#checkDomain) | **GET** /v1/domains/{id}/check | Check a domain
[**createAppDomain**](DomainsApi.md#createAppDomain) | **POST** /v1/domains | Create a domain
[**deleteDomain**](DomainsApi.md#deleteDomain) | **DELETE** /v1/domains/{id} | Delete a domain
[**disableSsl**](DomainsApi.md#disableSsl) | **POST** /v1/domains/{id}/ssl/disable | Disable ssl
[**enableSsl**](DomainsApi.md#enableSsl) | **POST** /v1/domains/provision-ssl-certs | Enable ssl
[**getAppDomains**](DomainsApi.md#getAppDomains) | **GET** /v1/domains?project&#x3D;{name} | Get all domains
[**redirectDomain**](DomainsApi.md#redirectDomain) | **POST** /v1/domains/{id}/set-redirect | Redirect a domain
[**setAppDomain**](DomainsApi.md#setAppDomain) | **POST** /v1/domains/set-project | Set a domain for project


# **checkDomain**
> CheckDomain checkDomain()

check a domain that user owns

### Example


```typescript
paas.DomainsApi.checkDomain('id-example')
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
 **id** | [**string**] | The id of your domain | defaults to undefined


### Return type

**CheckDomain**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | Domain does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **createAppDomain**
> void createAppDomain(domain)

create a domain that user owns

### Example


```typescript
const body = {
    name: 'name-example',
    project: 'project-example',
    type: 'PROJECT',
};

paas.DomainsApi.createAppDomain(body)
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
 **domain** | **CreateAppDomainRequest**| The domain of your app |


### Return type

**void**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **deleteDomain**
> void deleteDomain()

delete a domain that user owns

### Example


```typescript
paas.DomainsApi.deleteDomain('id-example')
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
 **id** | [**string**] | The id of your domain | defaults to undefined


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
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | Domain does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **disableSsl**
> void disableSsl()

disable ssl that user owns

### Example


```typescript
paas.DomainsApi.disableSsl('id-example')
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
 **id** | [**string**] | The id of your domain | defaults to undefined


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
**204** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | Domain does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **enableSsl**
> void enableSsl(domain)

enable ssl that user owns

### Example


```typescript
const body = {
    domain: 'domain-example',
};

paas.DomainsApi.enableSsl(body)
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
 **domain** | **EnableSslRequest**| The domain of your app |


### Return type

**void**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | Domain does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getAppDomains**
> Domains getAppDomains()

get all domains that user owns

### Example


```typescript
paas.DomainsApi.getAppDomains('name-example')
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
 **name** | [**string**] | The name of your app | defaults to undefined


### Return type

**Domains**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **redirectDomain**
> void redirectDomain(domain)

redirect a domain that user owns

### Example


```typescript
const body = {
    redirectStatus: 301, // or 302
    redirectTo: 'redirectTo-example',
};

paas.DomainsApi.redirectDomain('id-example', body)
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
 **domain** | **RedirectDomainRequest**| The domain of your app |
 **id** | [**string**] | The id of your domain | defaults to undefined


### Return type

**void**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | Domain does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **setAppDomain**
> void setAppDomain(domain)

set a domain for project that user owns

### Example


```typescript
const body = {
    domainID: 'domainID-example',
    projectID: 'projectID-example',
};

paas.DomainsApi.setAppDomain(body)
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
 **domain** | **SetAppDomainRequest**| The domain of your app |


### Return type

**void**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App or domain does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)