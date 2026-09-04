# DefaultApi

All URIs are relative to *https://pricing.baselinehq.cloud*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**healthzGet**](#healthzget) | **GET** /healthz | Health check endpoint|
|[**marketplaceProvidersComputeDelete**](#marketplaceproviderscomputedelete) | **DELETE** /marketplace/providers/compute | Delete a custom provider instance|
|[**marketplaceProvidersComputeGet**](#marketplaceproviderscomputeget) | **GET** /marketplace/providers/compute | Get your custom pricing entries|
|[**marketplaceProvidersComputePost**](#marketplaceproviderscomputepost) | **POST** /marketplace/providers/compute | Register a custom provider|
|[**marketplaceProvidersDatabasesDelete**](#marketplaceprovidersdatabasesdelete) | **DELETE** /marketplace/providers/databases | Delete a custom database pricing entry|
|[**marketplaceProvidersDatabasesGet**](#marketplaceprovidersdatabasesget) | **GET** /marketplace/providers/databases | Get your custom database pricing entries|
|[**marketplaceProvidersDatabasesPost**](#marketplaceprovidersdatabasespost) | **POST** /marketplace/providers/databases | Register custom database pricing|
|[**marketplaceProvidersDisksDelete**](#marketplaceprovidersdisksdelete) | **DELETE** /marketplace/providers/disks | Delete a custom disk provider entry|
|[**marketplaceProvidersDisksGet**](#marketplaceprovidersdisksget) | **GET** /marketplace/providers/disks | Get your custom disk pricing entries|
|[**marketplaceProvidersDisksPost**](#marketplaceprovidersdiskspost) | **POST** /marketplace/providers/disks | Register a custom disk provider|
|[**marketplaceProvidersModelsDelete**](#marketplaceprovidersmodelsdelete) | **DELETE** /marketplace/providers/models | Delete a custom model pricing entry|
|[**marketplaceProvidersModelsGet**](#marketplaceprovidersmodelsget) | **GET** /marketplace/providers/models | Get your custom model pricing entries|
|[**marketplaceProvidersModelsPost**](#marketplaceprovidersmodelspost) | **POST** /marketplace/providers/models | Register custom model pricing|
|[**pricingComputePost**](#pricingcomputepost) | **POST** /pricing/compute | Get pricing for an instance|
|[**pricingDisksPost**](#pricingdiskspost) | **POST** /pricing/disks | Get pricing for a disk|
|[**pricingPost**](#pricingpost) | **POST** /pricing | Get pricing for an instance|
|[**providersGet**](#providersget) | **GET** /providers | Get details for the providers|
|[**recommendationsComputePost**](#recommendationscomputepost) | **POST** /recommendations/compute | Get recommendations for compute instances|
|[**recommendationsDisksPost**](#recommendationsdiskspost) | **POST** /recommendations/disks | Get recommendations for disks|
|[**recommendationsPost**](#recommendationspost) | **POST** /recommendations | Get recommendations for compute instances|

# **healthzGet**
> { [key: string]: string; } healthzGet()

Health check endpoint Superseded by GET /v1/healthz.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

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
> RegisteredComputePrices marketplaceProvidersComputeDelete()

Delete one of your compute rates by id. A rate a resource is already priced against cannot be deleted; the request fails while that link exists, so re-pin those resources first. Once it is gone, a resource still carrying its id stops resolving a price rather than falling back to attribute matching. Superseded by DELETE /v1/marketplace/compute/{id}, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

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

**RegisteredComputePrices**

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
> ComputePriceList marketplaceProvidersComputeGet()

List the compute rates your organization has registered. Only your own rates are returned, never another organization\'s. Filters combine, and paging is by limit and offset. Superseded by GET /v1/marketplace/compute, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let limit: number; //Maximum entries to return (default 500) (optional) (default to undefined)
let offset: number; //Entries to skip (optional) (default to undefined)
let service: string; //Filter by service (optional) (default to undefined)
let region: string; //Filter by region (optional) (default to undefined)
let instanceType: string; //Filter by instance type (optional) (default to undefined)
let usageType: string; //Filter by usage type (optional) (default to undefined)

const { status, data } = await apiInstance.marketplaceProvidersComputeGet(
    limit,
    offset,
    service,
    region,
    instanceType,
    usageType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Maximum entries to return (default 500) | (optional) defaults to undefined|
| **offset** | [**number**] | Entries to skip | (optional) defaults to undefined|
| **service** | [**string**] | Filter by service | (optional) defaults to undefined|
| **region** | [**string**] | Filter by region | (optional) defaults to undefined|
| **instanceType** | [**string**] | Filter by instance type | (optional) defaults to undefined|
| **usageType** | [**string**] | Filter by usage type | (optional) defaults to undefined|


### Return type

**ComputePriceList**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing response for custom pricing |  -  |
|**400** | Invalid limit or offset |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceProvidersComputePost**
> RegisteredComputePrices marketplaceProvidersComputePost(instance)

Register your own compute rates so CostGraph can price machines it has no public price for, such as bare metal or a private cloud. An entry is upserted on its natural key (provider, service, region, availability zone, usage type, instance type, operating system and period billing hours), so re-posting the same entry with a new cost keeps its id and reprices everything already using it. Changing any key field mints a new id, because it describes a different SKU. The returned id is what you attach to a resource with the `costgraph.ai/pricing-id.compute` label or tag. Treat it as a secret you hand out deliberately: anyone holding it can pin to the rate, which is how a provider prices clusters it sells on. Superseded by POST /v1/marketplace/compute, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ComputePricesRequest
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: ComputePricesRequest; //Custom pricing request

const { status, data } = await apiInstance.marketplaceProvidersComputePost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **ComputePricesRequest**| Custom pricing request | |


### Return type

**RegisteredComputePrices**

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

# **marketplaceProvidersDatabasesDelete**
> RegisteredDatabasePrices marketplaceProvidersDatabasesDelete()

Delete one of your managed database rates by id. A rate a database or one of its reports still references cannot be deleted; the request fails while that reference exists, so re-pin first. Once it is gone, a database still carrying its id stops resolving a price. Superseded by DELETE /v1/marketplace/databases/{id}, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Database pricing ID (default to undefined)

const { status, data } = await apiInstance.marketplaceProvidersDatabasesDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Database pricing ID | defaults to undefined|


### Return type

**RegisteredDatabasePrices**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing response for custom database pricing |  -  |
|**400** | Invalid id |  -  |
|**401** | Provider and organization do not match |  -  |
|**404** | Database pricing entry not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceProvidersDatabasesGet**
> DatabasePriceList marketplaceProvidersDatabasesGet()

List the managed database rates your organization has registered. Only your own rates are returned. Filters combine, and paging is by limit and offset. Superseded by GET /v1/marketplace/databases, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let limit: number; //Maximum entries to return (default 500) (optional) (default to undefined)
let offset: number; //Entries to skip (optional) (default to undefined)
let service: string; //Filter by service (optional) (default to undefined)
let region: string; //Filter by region (optional) (default to undefined)
let engine: string; //Filter by engine (optional) (default to undefined)
let edition: string; //Filter by edition (optional) (default to undefined)
let instanceType: string; //Filter by instance type (optional) (default to undefined)
let usageType: string; //Filter by usage type (optional) (default to undefined)

const { status, data } = await apiInstance.marketplaceProvidersDatabasesGet(
    limit,
    offset,
    service,
    region,
    engine,
    edition,
    instanceType,
    usageType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Maximum entries to return (default 500) | (optional) defaults to undefined|
| **offset** | [**number**] | Entries to skip | (optional) defaults to undefined|
| **service** | [**string**] | Filter by service | (optional) defaults to undefined|
| **region** | [**string**] | Filter by region | (optional) defaults to undefined|
| **engine** | [**string**] | Filter by engine | (optional) defaults to undefined|
| **edition** | [**string**] | Filter by edition | (optional) defaults to undefined|
| **instanceType** | [**string**] | Filter by instance type | (optional) defaults to undefined|
| **usageType** | [**string**] | Filter by usage type | (optional) defaults to undefined|


### Return type

**DatabasePriceList**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing response for custom database pricing |  -  |
|**400** | Invalid limit or offset |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceProvidersDatabasesPost**
> RegisteredDatabasePrices marketplaceProvidersDatabasesPost(instance)

Register your own managed database rates, keyed by engine, edition, deployment option, storage type and instance type alongside the usual provider, service and region. An entry is upserted on the full natural key (provider, service, region, availability zone, usage type, engine, edition, deployment option, billing config, storage type, instance type, architecture and period billing hours), so re-posting with a new cost keeps its id; changing any key field mints a new one. The returned id is what you attach with the `costgraph.ai/pricing-id.database` label or tag. Superseded by POST /v1/marketplace/databases, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DatabasePricesRequest
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: DatabasePricesRequest; //Custom database pricing request

const { status, data } = await apiInstance.marketplaceProvidersDatabasesPost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **DatabasePricesRequest**| Custom database pricing request | |


### Return type

**RegisteredDatabasePrices**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing response for custom database pricing |  -  |
|**400** | Invalid request body |  -  |
|**401** | Provider and organization do not match |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceProvidersDisksDelete**
> RegisteredDiskPrices marketplaceProvidersDisksDelete()

Delete one of your storage rates by id. A rate a volume is already priced against cannot be deleted; the request fails while that link exists, so re-pin those volumes first. Once it is gone, a volume still carrying its id stops resolving a price. Superseded by DELETE /v1/marketplace/disks/{id}, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

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

**RegisteredDiskPrices**

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
> DiskPriceList marketplaceProvidersDisksGet()

List the storage rates your organization has registered. Only your own rates are returned. Filters combine, and paging is by limit and offset. Superseded by GET /v1/marketplace/disks, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let limit: number; //Maximum entries to return (default 500) (optional) (default to undefined)
let offset: number; //Entries to skip (optional) (default to undefined)
let service: string; //Filter by service (optional) (default to undefined)
let region: string; //Filter by region (optional) (default to undefined)
let type: string; //Filter by disk type (optional) (default to undefined)
let usageType: string; //Filter by usage type (optional) (default to undefined)

const { status, data } = await apiInstance.marketplaceProvidersDisksGet(
    limit,
    offset,
    service,
    region,
    type,
    usageType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Maximum entries to return (default 500) | (optional) defaults to undefined|
| **offset** | [**number**] | Entries to skip | (optional) defaults to undefined|
| **service** | [**string**] | Filter by service | (optional) defaults to undefined|
| **region** | [**string**] | Filter by region | (optional) defaults to undefined|
| **type** | [**string**] | Filter by disk type | (optional) defaults to undefined|
| **usageType** | [**string**] | Filter by usage type | (optional) defaults to undefined|


### Return type

**DiskPriceList**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing response for custom disk pricing |  -  |
|**400** | Invalid limit or offset |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceProvidersDisksPost**
> RegisteredDiskPrices marketplaceProvidersDisksPost(instance)

Register your own storage rates, priced per GB hour with optional IOPS and throughput components and the capacity band they apply to. An entry is upserted on its natural key (provider, service, region, availability zone, disk type, usage type and period billing hours), so re-posting with a new cost keeps its id; changing a key field mints a new one. Capacity, IOPS and throughput bands are not part of that key, so a second band for the same disk type replaces the first: give each band its own usage type. The returned id is what you attach with the `costgraph.ai/pricing-id.storage` label or tag. Superseded by POST /v1/marketplace/disks, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DiskPricesRequest
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: DiskPricesRequest; //Custom disk pricing request

const { status, data } = await apiInstance.marketplaceProvidersDisksPost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **DiskPricesRequest**| Custom disk pricing request | |


### Return type

**RegisteredDiskPrices**

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

# **marketplaceProvidersModelsDelete**
> RegisteredModelPrices marketplaceProvidersModelsDelete()

Delete one of your model rates by id. The row is closed rather than removed, so spend already priced against it keeps that rate. Usage still pinned to it stops resolving a price, so re-pin before deleting. Superseded by DELETE /v1/marketplace/models/{id}, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Model pricing ID (default to undefined)

const { status, data } = await apiInstance.marketplaceProvidersModelsDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Model pricing ID | defaults to undefined|


### Return type

**RegisteredModelPrices**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing response for custom model pricing |  -  |
|**400** | Invalid id |  -  |
|**401** | Host and organization do not match |  -  |
|**404** | Model pricing entry not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceProvidersModelsGet**
> ModelPriceList marketplaceProvidersModelsGet()

List the live version of each model rate your organization has registered. Only your own rates are returned. Filters combine, and paging is by limit and offset. Superseded by GET /v1/marketplace/models, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let limit: number; //Maximum entries to return (default 500) (optional) (default to undefined)
let offset: number; //Entries to skip (optional) (default to undefined)
let model: string; //Filter by model (optional) (default to undefined)
let provider: string; //Filter by model provider (optional) (default to undefined)
let region: string; //Filter by region (optional) (default to undefined)
let tokenBucket: string; //Filter by token bucket (optional) (default to undefined)

const { status, data } = await apiInstance.marketplaceProvidersModelsGet(
    limit,
    offset,
    model,
    provider,
    region,
    tokenBucket
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Maximum entries to return (default 500) | (optional) defaults to undefined|
| **offset** | [**number**] | Entries to skip | (optional) defaults to undefined|
| **model** | [**string**] | Filter by model | (optional) defaults to undefined|
| **provider** | [**string**] | Filter by model provider | (optional) defaults to undefined|
| **region** | [**string**] | Filter by region | (optional) defaults to undefined|
| **tokenBucket** | [**string**] | Filter by token bucket | (optional) defaults to undefined|


### Return type

**ModelPriceList**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing response for custom model pricing |  -  |
|**400** | Invalid limit or offset |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplaceProvidersModelsPost**
> RegisteredModelPrices marketplaceProvidersModelsPost(instance)

Register custom token pricing for models you host. Entries are versioned: a price change closes the current row and opens a new one, so historic spend keeps the rate it was billed at. The returned id is what you attach with the `costgraph.ai/pricing-id.model` label or tag. Each version carries its own id, so read the live entry back after a price change instead of holding on to an earlier one. Superseded by POST /v1/marketplace/models, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModelPricesRequest
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: ModelPricesRequest; //Custom model pricing request

const { status, data } = await apiInstance.marketplaceProvidersModelsPost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **ModelPricesRequest**| Custom model pricing request | |


### Return type

**RegisteredModelPrices**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pricing response for custom model pricing |  -  |
|**400** | Invalid request body |  -  |
|**401** | Host and organization do not match |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingComputePost**
> ComputePrice pricingComputePost(instance)

Get pricing for compute instances Superseded by POST /v1/pricing/compute, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    Instance
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: Instance; //Instance

const { status, data } = await apiInstance.pricingComputePost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **Instance**| Instance | |


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
|**200** | Pricing for a given instance |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthorized |  -  |
|**404** | Pricing not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingDisksPost**
> DiskPrice pricingDisksPost(instance)

Get pricing for a disk Superseded by POST /v1/pricing/disks, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    Disk
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: Disk; //Disk

const { status, data } = await apiInstance.pricingDisksPost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **Disk**| Disk | |


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
|**200** | Pricing for a given disk |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthorized |  -  |
|**404** | Pricing not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingPost**
> ComputePrice pricingPost(instance)

Get pricing for compute instances Superseded by POST /v1/pricing/compute, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    Instance
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: Instance; //Instance

const { status, data } = await apiInstance.pricingPost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **Instance**| Instance | |


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
|**200** | Pricing for a given instance |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthorized |  -  |
|**404** | Pricing not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **providersGet**
> { [key: string]: ProviderConfig; } providersGet()

Get details for the providers Superseded by GET /v1/providers, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

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
> Array<ComputeRecommendation> recommendationsComputePost(instance)

Get the cheapest compute candidate per provider with savings versus the requested instance Superseded by POST /v1/recommendations/compute, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ComputeRecommendationRequest
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: ComputeRecommendationRequest; //Instance

const { status, data } = await apiInstance.recommendationsComputePost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **ComputeRecommendationRequest**| Instance | |


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
|**200** | OK |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendationsDisksPost**
> Array<DiskRecommendation> recommendationsDisksPost(instance)

Get the cheapest disk candidate per provider with savings versus the requested disk Superseded by POST /v1/recommendations/disks, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DiskRecommendationRequest
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: DiskRecommendationRequest; //Instance

const { status, data } = await apiInstance.recommendationsDisksPost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **DiskRecommendationRequest**| Instance | |


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
|**200** | OK |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendationsPost**
> Array<ComputeRecommendation> recommendationsPost(instance)

Get the cheapest compute candidate per provider with savings versus the requested instance Superseded by POST /v1/recommendations/compute, which returns RFC 9457 problem responses on failure.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ComputeRecommendationRequest
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let instance: ComputeRecommendationRequest; //Instance

const { status, data } = await apiInstance.recommendationsPost(
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **ComputeRecommendationRequest**| Instance | |


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
|**200** | OK |  -  |
|**400** | Invalid request body |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

