# ProvidersApi

All URIs are relative to *https://pricing.baselinehq.cloud*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v1ProvidersGet**](#v1providersget) | **GET** /v1/providers | List the providers CostGraph prices|

# **v1ProvidersGet**
> { [key: string]: ProviderConfig; } v1ProvidersGet()

Return every provider the pricing catalogue covers, with the filter values each one accepts.

### Example

```typescript
import {
    ProvidersApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new ProvidersApi(configuration);

const { status, data } = await apiInstance.v1ProvidersGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: ProviderConfig; }**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The providers CostGraph prices |  -  |
|**401** | Unauthenticated |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

