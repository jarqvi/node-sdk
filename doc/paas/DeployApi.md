# DeployApi

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
const body = {
    sourceID: 'sourceID-example',
    port: 3000,
    type: 'type-example',
};

paas.DeployApi.releasesDeploy('name-example', body)
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
 **deployReleases** | **DeployReleases**|  |
 **name** | [**string**] | The name of your app for deploy | defaults to undefined


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

[[Back to top]](#) [[Back to README]](./../../README.md)

# **sourcesDeploy**
> void sourcesDeploy()

deploy sources code that user owns

### Example


```typescript
import * as fs from 'fs';

export type HttpFile = Blob & { readonly name: string };

// Function to create an HttpFile from a local file
function createHttpFile(filePath: string): HttpFile | null {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new Blob([fileBuffer], { type: 'application/octet-stream' }) as HttpFile;
  } catch (error) {
    console.error('Error reading file:', error);
    return null;
  }
}

// Replace './README.md' with the actual path to your file
const filePath = './README.md';
const httpFile = createHttpFile(filePath);

if (httpFile) {
  paas.DeployApi.sourcesDeploy('name-example', httpFile)
    .then(res => console.log(res))
    .catch(err => console.error(err));
} else {
  console.log('HttpFile could not be created.');
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of your app for deploy | defaults to undefined
 **file** | [**HttpFile**] | The .gz file to deploy | defaults to undefined


### Return type

**void**

### Authorization

[jwt](../../README.md#jwt)

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

[[Back to top]](#) [[Back to README]](./../../README.md)