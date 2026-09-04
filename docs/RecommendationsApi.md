# RecommendationsApi

All URIs are relative to *https://pricing.baselinehq.cloud*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v1RecommendationsComputePost**](#v1recommendationscomputepost) | **POST** /v1/recommendations/compute | Find cheaper machines|
|[**v1RecommendationsDisksPost**](#v1recommendationsdiskspost) | **POST** /v1/recommendations/disks | Find cheaper volumes|

# **v1RecommendationsComputePost**
> Array<ComputeRecommendation> v1RecommendationsComputePost(instance)

Return the cheapest machine per provider that still meets the requested shape, with the saving against the machine you asked about.

### Example

```typescript
import {
    RecommendationsApi,
    Configuration,
    ComputeRecommendationRequest
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new RecommendationsApi(configuration);

let instance: ComputeRecommendationRequest; //Machine to improve on

const { status, data } = await apiInstance.v1RecommendationsComputePost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **ComputeRecommendationRequest**| Machine to improve on | |


### Return type

**Array<ComputeRecommendation>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The cheapest candidate per provider |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthenticated |  -  |
|**404** | No candidate matches the machine |  -  |
|**422** | Validation failed |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1RecommendationsDisksPost**
> Array<DiskRecommendation> v1RecommendationsDisksPost(instance)

Return the cheapest volume per provider that still meets the requested capacity and performance, with the saving against the volume you asked about.

### Example

```typescript
import {
    RecommendationsApi,
    Configuration,
    DiskRecommendationRequest
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new RecommendationsApi(configuration);

let instance: DiskRecommendationRequest; //Volume to improve on

const { status, data } = await apiInstance.v1RecommendationsDisksPost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **DiskRecommendationRequest**| Volume to improve on | |


### Return type

**Array<DiskRecommendation>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The cheapest candidate per provider |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthenticated |  -  |
|**404** | No candidate matches the volume |  -  |
|**422** | Validation failed |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

