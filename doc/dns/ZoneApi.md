# ZoneApi

All URIs are relative to *https://dns-service.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createZone**](ZoneApi.md#createZone) | **POST** /api/v1/zones | Create Zone
[**deleteZone**](ZoneApi.md#deleteZone) | **DELETE** /api/v1/zones/{zone} | Delete Zone
[**getListZones**](ZoneApi.md#getListZones) | **GET** /api/v1/zones | List all zones
[**getZone**](ZoneApi.md#getZone) | **GET** /api/v1/zones/{zone} | Get Zone


# **createZone**
> CreateZone createZone(zoneStruct)

creates a new zone on dns server

### Example


```typescript
const body = {
  name: "name-example",
};

dns.ZoneApi.createZone(body)
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
 **zoneStruct** | **CreateZoneRequest**| The zone to create |


### Return type

**CreateZone**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |
**400** | Bad Request |  -  |
**401** | Missing authentication |  -  |
**409** | Conflict |  -  |
**500** | server does not response |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **deleteZone**
> Submitted | void deleteZone()

Deletes this zone, all dns records

### Example


```typescript
dns.ZoneApi.deleteZone('zone-example')
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
 **zone** | [**string**] | The name of the zone to delete | defaults to undefined


### Return type

**Submitted | void**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Your request has been submitted. |  -  |
**204** | Zone deleted. |  -  |
**401** | Missing authentication |  -  |
**404** | Zone does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getListZones**
> Zones getListZones()

list all zones that user owns

### Example


```typescript
dns.ZoneApi.getListZones()
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

**Zones**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An server |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)

# **getZone**
> CreateZone getZone()

Get this zone, all dns records

### Example


```typescript
dns.ZoneApi.getZone('name-example')
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
 **zone** | [**string**] | The name of the zone | defaults to undefined


### Return type

**CreateZone**

### Authorization

[jwt](../../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | zone details |  -  |
**401** | Missing authentication |  -  |
**404** | Zone does not exists. |  -  |

[[Back to top]](#) [[Back to README]](./../../README.md)


