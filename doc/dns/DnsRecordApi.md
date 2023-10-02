# .DnsRecordApi

All URIs are relative to *https://dns-service.iran.liara.ir/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDnsRecord**](DnsRecordApi.md#createDnsRecord) | **POST** /zones/{zone}/dns-records | Create dns record
[**deleteDnsRecord**](DnsRecordApi.md#deleteDnsRecord) | **DELETE** /zones/{zone}/dns-records/{id} | delete dns record
[**editDnsRecord**](DnsRecordApi.md#editDnsRecord) | **PUT** /zones/{zone}/dns-records/{id} | edit dns record
[**getDnsRecord**](DnsRecordApi.md#getDnsRecord) | **GET** /zones/{zone}/dns-records/{id} | Get dns record
[**getListDnsRecords**](DnsRecordApi.md#getListDnsRecords) | **GET** /zones/{zone}/dns-records | Get all dns record


# **createDnsRecord**
> DnsRecordResponse createDnsRecord(dnsRecord)

Creates a new dns record, returns the dns record on creation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DnsRecordApi(configuration);

let body:.DnsRecordApiCreateDnsRecordRequest = {
  // string | The name of the zone to delete
  zone: "zone_example",
  // DnsRecord
  dnsRecord: {
    name: "name_example",
    type: "type_example",
    ttl: 3.14,
    contents: [
      {},
    ],
  },
};

apiInstance.createDnsRecord(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dnsRecord** | **DnsRecord**|  |
 **zone** | [**string**] | The name of the zone to delete | defaults to undefined


### Return type

**DnsRecordResponse**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | Zone does not exists. |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDnsRecord**
> void deleteDnsRecord()

Delete dns record from this zone

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DnsRecordApi(configuration);

let body:.DnsRecordApiDeleteDnsRecordRequest = {
  // string | The name of the zone to delete dns record
  zone: "zone_example",
  // string | The id of dns record to delete its data
  id: "id_example",
};

apiInstance.deleteDnsRecord(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zone** | [**string**] | The name of the zone to delete dns record | defaults to undefined
 **id** | [**string**] | The id of dns record to delete its data | defaults to undefined


### Return type

**void**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | Zone does not exists. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **editDnsRecord**
> DnsRecordResponse editDnsRecord(dnsRecord)

you can not edit type of dns record

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DnsRecordApi(configuration);

let body:.DnsRecordApiEditDnsRecordRequest = {
  // string | The name of the zone to edit dns record
  zone: "zone_example",
  // string | The id of dns record to edit its data
  id: "id_example",
  // DnsRecord
  dnsRecord: {
    name: "name_example",
    type: "type_example",
    ttl: 3.14,
    contents: [
      {},
    ],
  },
};

apiInstance.editDnsRecord(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dnsRecord** | **DnsRecord**|  |
 **zone** | [**string**] | The name of the zone to edit dns record | defaults to undefined
 **id** | [**string**] | The id of dns record to edit its data | defaults to undefined


### Return type

**DnsRecordResponse**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | Zone does not exists. |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDnsRecord**
> DnsRecordResponse getDnsRecord()

Get Dns Record data on this zone

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DnsRecordApi(configuration);

let body:.DnsRecordApiGetDnsRecordRequest = {
  // string | The name of the zone to see dns record
  zone: "zone_example",
  // string | The id of dns record to see its data
  id: "id_example",
};

apiInstance.getDnsRecord(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zone** | [**string**] | The name of the zone to see dns record | defaults to undefined
 **id** | [**string**] | The id of dns record to see its data | defaults to undefined


### Return type

**DnsRecordResponse**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | Zone or dns record Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getListDnsRecords**
> AllDnsRecordResponse getListDnsRecords()

Get all Dns Records on this zone

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DnsRecordApi(configuration);

let body:.DnsRecordApiGetListDnsRecordsRequest = {
  // string | The name of the zone to see all dns records
  zone: "zone_example",
};

apiInstance.getListDnsRecords(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zone** | [**string**] | The name of the zone to see all dns records | defaults to undefined


### Return type

**AllDnsRecordResponse**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | Zone Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


