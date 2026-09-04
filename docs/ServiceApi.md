# ServiceApi

All URIs are relative to *https://pricing.baselinehq.cloud*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v1HealthzGet**](#v1healthzget) | **GET** /v1/healthz | Check the service is live|

# **v1HealthzGet**
> { [key: string]: string; } v1HealthzGet()

Report that the pricing service is accepting requests. No credential is required.

### Example

```typescript
import {
    ServiceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new ServiceApi(configuration);

const { status, data } = await apiInstance.v1HealthzGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The service is live |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

