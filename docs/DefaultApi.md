# DefaultApi

All URIs are relative to *https://pricing.baselinehq.cloud*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**healthzGet**](#healthzget) | **GET** /healthz | Health check endpoint|
|[**marketplaceProvidersComputeDelete**](#marketplaceproviderscomputedelete) | **DELETE** /marketplace/providers/compute | Delete a custom provider instance|
|[**marketplaceProvidersComputeGet**](#marketplaceproviderscomputeget) | **GET** /marketplace/providers/compute | Get your custom pricing entries|
|[**marketplaceProvidersComputePost**](#marketplaceproviderscomputepost) | **POST** /marketplace/providers/compute | Register a custom provider|
|[**marketplaceProvidersDisksDelete**](#marketplaceprovidersdisksdelete) | **DELETE** /marketplace/providers/disks | Delete a custom disk provider entry|
|[**marketplaceProvidersDisksGet**](#marketplaceprovidersdisksget) | **GET** /marketplace/providers/disks | Get your custom disk pricing entries|
|[**marketplaceProvidersDisksPost**](#marketplaceprovidersdiskspost) | **POST** /marketplace/providers/disks | Register a custom disk provider|
|[**pricingComputePost**](#pricingcomputepost) | **POST** /pricing/compute | Get pricing for an instance|
|[**pricingDisksPost**](#pricingdiskspost) | **POST** /pricing/disks | Get pricing for a disk|
|[**pricingPost**](#pricingpost) | **POST** /pricing | Get pricing for an instance|
|[**providersGet**](#providersget) | **GET** /providers | Get details for the providers|
|[**recommendationsComputePost**](#recommendationscomputepost) | **POST** /recommendations/compute | Get recommendations for compute instances|
|[**recommendationsDisksPost**](#recommendationsdiskspost) | **POST** /recommendations/disks | Get recommendations for disks|
|[**recommendationsPost**](#recommendationspost) | **POST** /recommendations | Get recommendations for compute instances|

# **healthzGet**
> { [key: string]: string; } healthzGet()

Health check endpoint

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricing-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.healthzGet();
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
|**200** | Health check response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceProvidersComputeDelete**
> TypesCustomPricingResponse marketplaceProvidersComputeDelete()

Delete a custom provider instance

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricing-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Instance ID (default to undefined)

const { status, data } = await apiInstance.marketplaceProvidersComputeDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Instance ID | defaults to undefined|


### Return type

**TypesCustomPricingResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing response for a custom provider |  -  |
|**400** | Invalid id |  -  |
|**401** | Provider and organization do not match |  -  |
|**404** | Instance not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceProvidersComputeGet**
> TypesMarketplaceProvidersResponse marketplaceProvidersComputeGet()

Get your custom pricing entries

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricing-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.marketplaceProvidersComputeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TypesMarketplaceProvidersResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing response for custom pricing |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceProvidersComputePost**
> TypesCustomPricingResponse marketplaceProvidersComputePost(instance)

Register a custom provider

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    TypesCustomPriceRequest
} from '@baselinehq/pricing-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: TypesCustomPriceRequest; //Custom pricing request

const { status, data } = await apiInstance.marketplaceProvidersComputePost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **TypesCustomPriceRequest**| Custom pricing request | |


### Return type

**TypesCustomPricingResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing response for a custom provider |  -  |
|**400** | Invalid request body |  -  |
|**401** | Provider and organization do not match |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceProvidersDisksDelete**
> TypesCustomDiskPricingResponse marketplaceProvidersDisksDelete()

Delete a custom disk provider entry

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricing-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Disk pricing ID (default to undefined)

const { status, data } = await apiInstance.marketplaceProvidersDisksDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Disk pricing ID | defaults to undefined|


### Return type

**TypesCustomDiskPricingResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing response for a custom disk provider |  -  |
|**400** | Invalid id |  -  |
|**401** | Provider and organization do not match |  -  |
|**404** | Disk pricing entry not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceProvidersDisksGet**
> TypesMarketplaceDiskProvidersResponse marketplaceProvidersDisksGet()

Get your custom disk pricing entries

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricing-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.marketplaceProvidersDisksGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TypesMarketplaceDiskProvidersResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing response for custom disk pricing |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceProvidersDisksPost**
> TypesCustomDiskPricingResponse marketplaceProvidersDisksPost(instance)

Register a custom disk provider

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    TypesCustomDiskPriceRequest
} from '@baselinehq/pricing-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: TypesCustomDiskPriceRequest; //Custom disk pricing request

const { status, data } = await apiInstance.marketplaceProvidersDisksPost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **TypesCustomDiskPriceRequest**| Custom disk pricing request | |


### Return type

**TypesCustomDiskPricingResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing response for a custom disk provider |  -  |
|**400** | Invalid request body |  -  |
|**401** | Provider and organization do not match |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingComputePost**
> SchemaComputePricingsRow pricingComputePost(instance)

Get pricing for compute instances

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    GithubComBaselinehqGolangSharedTypesInstance
} from '@baselinehq/pricing-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: GithubComBaselinehqGolangSharedTypesInstance; //Instance

const { status, data } = await apiInstance.pricingComputePost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **GithubComBaselinehqGolangSharedTypesInstance**| Instance | |


### Return type

**SchemaComputePricingsRow**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing for a given instance |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthorized |  -  |
|**404** | Pricing not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingDisksPost**
> SchemaDiskPricingsRow pricingDisksPost(instance)

Get pricing for a disk

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    TypesDisk
} from '@baselinehq/pricing-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: TypesDisk; //Disk

const { status, data } = await apiInstance.pricingDisksPost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **TypesDisk**| Disk | |


### Return type

**SchemaDiskPricingsRow**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing for a given disk |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthorized |  -  |
|**404** | Pricing not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingPost**
> SchemaComputePricingsRow pricingPost(instance)

Get pricing for compute instances

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    GithubComBaselinehqGolangSharedTypesInstance
} from '@baselinehq/pricing-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: GithubComBaselinehqGolangSharedTypesInstance; //Instance

const { status, data } = await apiInstance.pricingPost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **GithubComBaselinehqGolangSharedTypesInstance**| Instance | |


### Return type

**SchemaComputePricingsRow**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing for a given instance |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthorized |  -  |
|**404** | Pricing not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **providersGet**
> { [key: string]: ProviderConfig; } providersGet()

Get details for the providers

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricing-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.providersGet();
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
|**200** | List of providers |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendationsComputePost**
> { [key: string]: Array<TypesComputeResultsValueInner>; } recommendationsComputePost(instance)

Get recommendations for compute instances (Recommendations, InstancePricing, VM, Savings)

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    TypesComputeRequest
} from '@baselinehq/pricing-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: TypesComputeRequest; //Instance

const { status, data } = await apiInstance.recommendationsComputePost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **TypesComputeRequest**| Instance | |


### Return type

**{ [key: string]: Array<TypesComputeResultsValueInner>; }**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendationsDisksPost**
> { [key: string]: Array<TypesDiskResultsValueInner>; } recommendationsDisksPost(instance)

Get recommendations for disks used in the server (Recommendations, DiskPricing, Savings)

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    TypesDiskRequest
} from '@baselinehq/pricing-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: TypesDiskRequest; //Instance

const { status, data } = await apiInstance.recommendationsDisksPost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **TypesDiskRequest**| Instance | |


### Return type

**{ [key: string]: Array<TypesDiskResultsValueInner>; }**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendationsPost**
> { [key: string]: Array<TypesComputeResultsValueInner>; } recommendationsPost(instance)

Get recommendations for compute instances (Recommendations, InstancePricing, VM, Savings)

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    TypesComputeRequest
} from '@baselinehq/pricing-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: TypesComputeRequest; //Instance

const { status, data } = await apiInstance.recommendationsPost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **TypesComputeRequest**| Instance | |


### Return type

**{ [key: string]: Array<TypesComputeResultsValueInner>; }**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

