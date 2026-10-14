# RecommendationsApi

All URIs are relative to *https://pricing.baselinehq.cloud*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v1RecommendationsComputePost**](#v1recommendationscomputepost) | **POST** /v1/recommendations/compute | Find cheaper machines|
|[**v1RecommendationsDisksPost**](#v1recommendationsdiskspost) | **POST** /v1/recommendations/disks | Find cheaper volumes|
|[**v1RecommendationsRunnerPost**](#v1recommendationsrunnerpost) | **POST** /v1/recommendations/runner | Find cheaper CI runners|

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
let persist: boolean; //Save a price computed for a shape the catalogue does not list. Defaults to true; false returns the same recommendations without saving. (optional) (default to undefined)

const { status, data } = await apiInstance.v1RecommendationsComputePost(
    instance,
    persist
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **ComputeRecommendationRequest**| Machine to improve on | |
| **persist** | [**boolean**] | Save a price computed for a shape the catalogue does not list. Defaults to true; false returns the same recommendations without saving. | (optional) defaults to undefined|


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

# **v1RecommendationsRunnerPost**
> Array<RunnerRecommendation> v1RecommendationsRunnerPost(request)

Prices the given CI jobs on every runner provider that fits the shape, using each provider\'s own billing granularity (per-minute round-up, per-second, minimums), plus self-hosted compute when self_hosted names a cloud and region. Results are cheapest first. Flags explain caveats such as self-hosted runners on public repositories or savings that need per-job durations to count.

### Example

```typescript
import {
    RecommendationsApi,
    Configuration,
    RunnerRecommendationRequest
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new RecommendationsApi(configuration);

let request: RunnerRecommendationRequest; //Jobs to price

const { status, data } = await apiInstance.v1RecommendationsRunnerPost(
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **RunnerRecommendationRequest**| Jobs to price | |


### Return type

**Array<RunnerRecommendation>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | One candidate per provider, cheapest first |  -  |
|**400** | Invalid request body |  -  |
|**401** | Missing or invalid credentials |  -  |
|**404** | No runner matches the shape |  -  |
|**422** | Invalid field |  -  |
|**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

