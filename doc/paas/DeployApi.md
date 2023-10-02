# .DeployApi

All URIs are relative to *https://api.iran.liara.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**releasesDeploy**](DeployApi.md#releasesDeploy) | **POST** /v2/projects/{name}/releases | Deploy releases
[**sourcesDeploy**](DeployApi.md#sourcesDeploy) | **POST** /v2/projects/{name}/sources | Deploy sources code


# **releasesDeploy**
> void releasesDeploy(deployReleases)

deploy releases that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DeployApi(configuration);

let body:.DeployApiReleasesDeployRequest = {
  // string | The name of your app for deploy
  name: "name_example",
  // DeployReleases
  deployReleases: {
    sourceID: "sourceID_example",
    port: 3.14,
    type: "type_example",
  },
};

apiInstance.releasesDeploy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployReleases** | **DeployReleases**|  |
 **name** | [**string**] | The name of your app for deploy | defaults to undefined


### Return type

**void**

### Authorization

[jwt](README.md#jwt)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sourcesDeploy**
> void sourcesDeploy()

deploy sources code that user owns

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DeployApi(configuration);

let body:.DeployApiSourcesDeployRequest = {
  // string | The name of your app for deploy
  name: "name_example",
  // HttpFile | The .gz file to deploy
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.sourcesDeploy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of your app for deploy | defaults to undefined
 **file** | [**HttpFile**] | The .gz file to deploy | defaults to undefined


### Return type

**void**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Missing authentication |  -  |
**404** | App does not exists. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


