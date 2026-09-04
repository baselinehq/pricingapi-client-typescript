# PricingApi

All URIs are relative to *https://pricing.baselinehq.cloud*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v1PricingComputePost**](#v1pricingcomputepost) | **POST** /v1/pricing/compute | Price a machine|
|[**v1PricingDisksPost**](#v1pricingdiskspost) | **POST** /v1/pricing/disks | Price a volume|

# **v1PricingComputePost**
> ComputePrice v1PricingComputePost(instance)

Resolve the hourly rate CostGraph would bill for a machine with the given shape, in the given region and usage type. Prices you have published for the machine\'s provider are preferred over the public catalogue.

### Example

```typescript
import {
    PricingApi,
    Configuration,
    Instance
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new PricingApi(configuration);

let instance: Instance; //Machine to price

const { status, data } = await apiInstance.v1PricingComputePost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **Instance**| Machine to price | |


### Return type

**ComputePrice**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The resolved price |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthenticated |  -  |
|**404** | No price matches the machine |  -  |
|**422** | Validation failed |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1PricingDisksPost**
> DiskPrice v1PricingDisksPost(instance)

Resolve the rate CostGraph would bill for a block volume of the given type and capacity, in the given region. Prices you have published for the volume\'s provider are preferred over the public catalogue.

### Example

```typescript
import {
    PricingApi,
    Configuration,
    Disk
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new PricingApi(configuration);

let instance: Disk; //Volume to price

const { status, data } = await apiInstance.v1PricingDisksPost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **Disk**| Volume to price | |


### Return type

**DiskPrice**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The resolved price |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthenticated |  -  |
|**404** | No price matches the volume |  -  |
|**422** | Validation failed |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

