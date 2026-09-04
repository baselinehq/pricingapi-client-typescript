# MarketplaceApi

All URIs are relative to *https://pricing.baselinehq.cloud*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v1MarketplaceComputeGet**](#v1marketplacecomputeget) | **GET** /v1/marketplace/compute | List your compute prices|
|[**v1MarketplaceComputeIdDelete**](#v1marketplacecomputeiddelete) | **DELETE** /v1/marketplace/compute/{id} | Delete one compute price|
|[**v1MarketplaceComputeIdGet**](#v1marketplacecomputeidget) | **GET** /v1/marketplace/compute/{id} | Read one compute price|
|[**v1MarketplaceComputeIdPatch**](#v1marketplacecomputeidpatch) | **PATCH** /v1/marketplace/compute/{id} | Change one compute price|
|[**v1MarketplaceComputePost**](#v1marketplacecomputepost) | **POST** /v1/marketplace/compute | Publish compute prices|
|[**v1MarketplaceDatabasesGet**](#v1marketplacedatabasesget) | **GET** /v1/marketplace/databases | List your database prices|
|[**v1MarketplaceDatabasesIdDelete**](#v1marketplacedatabasesiddelete) | **DELETE** /v1/marketplace/databases/{id} | Delete one database price|
|[**v1MarketplaceDatabasesIdGet**](#v1marketplacedatabasesidget) | **GET** /v1/marketplace/databases/{id} | Read one database price|
|[**v1MarketplaceDatabasesIdPatch**](#v1marketplacedatabasesidpatch) | **PATCH** /v1/marketplace/databases/{id} | Change one database price|
|[**v1MarketplaceDatabasesPost**](#v1marketplacedatabasespost) | **POST** /v1/marketplace/databases | Publish database prices|
|[**v1MarketplaceDisksGet**](#v1marketplacedisksget) | **GET** /v1/marketplace/disks | List your disk prices|
|[**v1MarketplaceDisksIdDelete**](#v1marketplacedisksiddelete) | **DELETE** /v1/marketplace/disks/{id} | Delete one disk price|
|[**v1MarketplaceDisksIdGet**](#v1marketplacedisksidget) | **GET** /v1/marketplace/disks/{id} | Read one disk price|
|[**v1MarketplaceDisksIdPatch**](#v1marketplacedisksidpatch) | **PATCH** /v1/marketplace/disks/{id} | Change one disk price|
|[**v1MarketplaceDisksPost**](#v1marketplacediskspost) | **POST** /v1/marketplace/disks | Publish disk prices|
|[**v1MarketplaceFiltersKindGet**](#v1marketplacefilterskindget) | **GET** /v1/marketplace/filters/{kind} | List the filters a price kind accepts|
|[**v1MarketplaceModelsGet**](#v1marketplacemodelsget) | **GET** /v1/marketplace/models | List your model prices|
|[**v1MarketplaceModelsIdDelete**](#v1marketplacemodelsiddelete) | **DELETE** /v1/marketplace/models/{id} | Delete one model price|
|[**v1MarketplaceModelsIdGet**](#v1marketplacemodelsidget) | **GET** /v1/marketplace/models/{id} | Read one model price|
|[**v1MarketplaceModelsIdPatch**](#v1marketplacemodelsidpatch) | **PATCH** /v1/marketplace/models/{id} | Change one model price|
|[**v1MarketplaceModelsPost**](#v1marketplacemodelspost) | **POST** /v1/marketplace/models | Publish model prices|

# **v1MarketplaceComputeGet**
> ComputePricePage v1MarketplaceComputeGet()

List the compute rates your organization has published. Only your own rates are returned, never another organization\'s. Filters combine, and paging is by limit and an opaque cursor carried in the page of the previous response.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let limit: number; //Maximum prices to return (default 500) (optional) (default to undefined)
let cursor: string; //Cursor from the previous page (optional) (default to undefined)
let service: string; //Filter by service (optional) (default to undefined)
let region: string; //Filter by region (optional) (default to undefined)
let instanceType: string; //Filter by instance type (optional) (default to undefined)
let usageType: string; //Filter by usage type (optional) (default to undefined)

const { status, data } = await apiInstance.v1MarketplaceComputeGet(
    limit,
    cursor,
    service,
    region,
    instanceType,
    usageType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Maximum prices to return (default 500) | (optional) defaults to undefined|
| **cursor** | [**string**] | Cursor from the previous page | (optional) defaults to undefined|
| **service** | [**string**] | Filter by service | (optional) defaults to undefined|
| **region** | [**string**] | Filter by region | (optional) defaults to undefined|
| **instanceType** | [**string**] | Filter by instance type | (optional) defaults to undefined|
| **usageType** | [**string**] | Filter by usage type | (optional) defaults to undefined|


### Return type

**ComputePricePage**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A page of your prices |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceComputeIdDelete**
> v1MarketplaceComputeIdDelete()

Delete a compute price you have published, by its id. Usage still pinned to it stops resolving a price, so re-pin before deleting.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let id: string; //Price id (default to undefined)

const { status, data } = await apiInstance.v1MarketplaceComputeIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Price id | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The price was deleted |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceComputeIdGet**
> ComputePrice v1MarketplaceComputeIdGet()

Read a single compute rate your organization has published, by its id. A price belonging to another organization is not visible and reads as not found.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let id: string; //Price id (default to undefined)

const { status, data } = await apiInstance.v1MarketplaceComputeIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Price id | defaults to undefined|


### Return type

**ComputePrice**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The price |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceComputeIdPatch**
> ComputePrice v1MarketplaceComputeIdPatch(body)

Change the rate or the descriptive fields of a compute price you have published. Send only the fields you want to change. The fields that identify the price cannot be changed, because they describe a different SKU; delete the price and register a new one instead.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let id: string; //Price id (default to undefined)
let body: { [key: string]: any; }; //Fields to change

const { status, data } = await apiInstance.v1MarketplaceComputeIdPatch(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **{ [key: string]: any; }**| Fields to change | |
| **id** | [**string**] | Price id | defaults to undefined|


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
|**200** | The changed price |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceComputePost**
> PublishedComputePrices v1MarketplaceComputePost(body)

Register your own compute rates so CostGraph can price machines it has no public price for, such as bare metal or a private cloud. An entry is upserted on its natural key (provider, service, region, availability zone, usage type, instance type, operating system and period billing hours), so re-posting the same entry with a new cost keeps its id and reprices everything already using it. Changing any key field mints a new id, because it describes a different SKU. The returned id is what you attach to a resource with the `costgraph.ai/pricing-id.compute` label or tag.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration,
    ComputePricesRequest
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let body: ComputePricesRequest; //Prices to publish

const { status, data } = await apiInstance.v1MarketplaceComputePost(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **ComputePricesRequest**| Prices to publish | |


### Return type

**PublishedComputePrices**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The published prices |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceDatabasesGet**
> DatabasePricePage v1MarketplaceDatabasesGet()

List the database rates your organization has published. Only your own rates are returned, never another organization\'s. Filters combine, and paging is by limit and an opaque cursor carried in the page of the previous response.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let limit: number; //Maximum prices to return (default 500) (optional) (default to undefined)
let cursor: string; //Cursor from the previous page (optional) (default to undefined)
let service: string; //Filter by service (optional) (default to undefined)
let region: string; //Filter by region (optional) (default to undefined)
let engine: string; //Filter by engine (optional) (default to undefined)
let edition: string; //Filter by edition (optional) (default to undefined)
let instanceType: string; //Filter by instance type (optional) (default to undefined)
let usageType: string; //Filter by usage type (optional) (default to undefined)

const { status, data } = await apiInstance.v1MarketplaceDatabasesGet(
    limit,
    cursor,
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
| **limit** | [**number**] | Maximum prices to return (default 500) | (optional) defaults to undefined|
| **cursor** | [**string**] | Cursor from the previous page | (optional) defaults to undefined|
| **service** | [**string**] | Filter by service | (optional) defaults to undefined|
| **region** | [**string**] | Filter by region | (optional) defaults to undefined|
| **engine** | [**string**] | Filter by engine | (optional) defaults to undefined|
| **edition** | [**string**] | Filter by edition | (optional) defaults to undefined|
| **instanceType** | [**string**] | Filter by instance type | (optional) defaults to undefined|
| **usageType** | [**string**] | Filter by usage type | (optional) defaults to undefined|


### Return type

**DatabasePricePage**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A page of your prices |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceDatabasesIdDelete**
> v1MarketplaceDatabasesIdDelete()

Delete a database price you have published, by its id. Usage still pinned to it stops resolving a price, so re-pin before deleting.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let id: string; //Price id (default to undefined)

const { status, data } = await apiInstance.v1MarketplaceDatabasesIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Price id | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The price was deleted |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceDatabasesIdGet**
> DatabasePrice v1MarketplaceDatabasesIdGet()

Read a single database rate your organization has published, by its id. A price belonging to another organization is not visible and reads as not found.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let id: string; //Price id (default to undefined)

const { status, data } = await apiInstance.v1MarketplaceDatabasesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Price id | defaults to undefined|


### Return type

**DatabasePrice**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The price |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceDatabasesIdPatch**
> DatabasePrice v1MarketplaceDatabasesIdPatch(body)

Change the rate or the descriptive fields of a database price you have published. Send only the fields you want to change. The fields that identify the price cannot be changed, because they describe a different SKU; delete the price and register a new one instead.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let id: string; //Price id (default to undefined)
let body: { [key: string]: any; }; //Fields to change

const { status, data } = await apiInstance.v1MarketplaceDatabasesIdPatch(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **{ [key: string]: any; }**| Fields to change | |
| **id** | [**string**] | Price id | defaults to undefined|


### Return type

**DatabasePrice**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The changed price |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceDatabasesPost**
> PublishedDatabasePrices v1MarketplaceDatabasesPost(body)

Register your own managed database rates so CostGraph can price clusters it has no public price for. An entry is upserted on its natural key (provider, service, region, engine, edition, instance type and usage type), so re-posting the same entry with a new cost keeps its id and reprices everything already using it. The returned id is what you attach to a database with the `costgraph.ai/pricing-id.database` label or tag.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration,
    DatabasePricesRequest
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let body: DatabasePricesRequest; //Prices to publish

const { status, data } = await apiInstance.v1MarketplaceDatabasesPost(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **DatabasePricesRequest**| Prices to publish | |


### Return type

**PublishedDatabasePrices**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The published prices |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceDisksGet**
> DiskPricePage v1MarketplaceDisksGet()

List the disk rates your organization has published. Only your own rates are returned, never another organization\'s. Filters combine, and paging is by limit and an opaque cursor carried in the page of the previous response.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let limit: number; //Maximum prices to return (default 500) (optional) (default to undefined)
let cursor: string; //Cursor from the previous page (optional) (default to undefined)
let service: string; //Filter by service (optional) (default to undefined)
let region: string; //Filter by region (optional) (default to undefined)
let type: string; //Filter by disk type (optional) (default to undefined)
let usageType: string; //Filter by usage type (optional) (default to undefined)

const { status, data } = await apiInstance.v1MarketplaceDisksGet(
    limit,
    cursor,
    service,
    region,
    type,
    usageType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Maximum prices to return (default 500) | (optional) defaults to undefined|
| **cursor** | [**string**] | Cursor from the previous page | (optional) defaults to undefined|
| **service** | [**string**] | Filter by service | (optional) defaults to undefined|
| **region** | [**string**] | Filter by region | (optional) defaults to undefined|
| **type** | [**string**] | Filter by disk type | (optional) defaults to undefined|
| **usageType** | [**string**] | Filter by usage type | (optional) defaults to undefined|


### Return type

**DiskPricePage**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A page of your prices |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceDisksIdDelete**
> v1MarketplaceDisksIdDelete()

Delete a disk price you have published, by its id. Usage still pinned to it stops resolving a price, so re-pin before deleting.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let id: string; //Price id (default to undefined)

const { status, data } = await apiInstance.v1MarketplaceDisksIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Price id | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The price was deleted |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceDisksIdGet**
> DiskPrice v1MarketplaceDisksIdGet()

Read a single disk rate your organization has published, by its id. A price belonging to another organization is not visible and reads as not found.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let id: string; //Price id (default to undefined)

const { status, data } = await apiInstance.v1MarketplaceDisksIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Price id | defaults to undefined|


### Return type

**DiskPrice**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The price |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceDisksIdPatch**
> DiskPrice v1MarketplaceDisksIdPatch(body)

Change the rate or the descriptive fields of a disk price you have published. Send only the fields you want to change. The fields that identify the price cannot be changed, because they describe a different SKU; delete the price and register a new one instead.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let id: string; //Price id (default to undefined)
let body: { [key: string]: any; }; //Fields to change

const { status, data } = await apiInstance.v1MarketplaceDisksIdPatch(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **{ [key: string]: any; }**| Fields to change | |
| **id** | [**string**] | Price id | defaults to undefined|


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
|**200** | The changed price |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceDisksPost**
> PublishedDiskPrices v1MarketplaceDisksPost(body)

Register your own block storage rates so CostGraph can price volumes it has no public price for. An entry is upserted on its natural key (provider, service, region, availability zone, usage type, type and period billing hours), so re-posting the same entry with a new cost keeps its id and reprices everything already using it. The returned id is what you attach to a volume with the `costgraph.ai/pricing-id.disk` label or tag.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration,
    DiskPricesRequest
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let body: DiskPricesRequest; //Prices to publish

const { status, data } = await apiInstance.v1MarketplaceDisksPost(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **DiskPricesRequest**| Prices to publish | |


### Return type

**PublishedDiskPrices**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The published prices |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceFiltersKindGet**
> FilterSet v1MarketplaceFiltersKindGet()

The query parameters you can filter this kind of price by. They differ by kind because the fields that identify a price differ: compute prices carry an instance type, disk prices a disk type, database prices an engine.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let kind: 'compute' | 'disks' | 'databases' | 'models'; //Price kind (default to undefined)

const { status, data } = await apiInstance.v1MarketplaceFiltersKindGet(
    kind
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **kind** | [**&#39;compute&#39; | &#39;disks&#39; | &#39;databases&#39; | &#39;models&#39;**]**Array<&#39;compute&#39; &#124; &#39;disks&#39; &#124; &#39;databases&#39; &#124; &#39;models&#39;>** | Price kind | defaults to undefined|


### Return type

**FilterSet**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceModelsGet**
> ModelPricePage v1MarketplaceModelsGet()

List the model rates your organization has published. Only your own rates are returned, never another organization\'s. Filters combine, and paging is by limit and an opaque cursor carried in the page of the previous response.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let limit: number; //Maximum prices to return (default 500) (optional) (default to undefined)
let cursor: string; //Cursor from the previous page (optional) (default to undefined)
let model: string; //Filter by model (optional) (default to undefined)
let provider: string; //Filter by model provider (optional) (default to undefined)
let region: string; //Filter by region (optional) (default to undefined)
let tokenBucket: string; //Filter by token bucket (optional) (default to undefined)

const { status, data } = await apiInstance.v1MarketplaceModelsGet(
    limit,
    cursor,
    model,
    provider,
    region,
    tokenBucket
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Maximum prices to return (default 500) | (optional) defaults to undefined|
| **cursor** | [**string**] | Cursor from the previous page | (optional) defaults to undefined|
| **model** | [**string**] | Filter by model | (optional) defaults to undefined|
| **provider** | [**string**] | Filter by model provider | (optional) defaults to undefined|
| **region** | [**string**] | Filter by region | (optional) defaults to undefined|
| **tokenBucket** | [**string**] | Filter by token bucket | (optional) defaults to undefined|


### Return type

**ModelPricePage**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A page of your prices |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceModelsIdDelete**
> v1MarketplaceModelsIdDelete()

Delete a model price you have published, by its id. Usage still pinned to it stops resolving a price, so re-pin before deleting.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let id: string; //Price id (default to undefined)

const { status, data } = await apiInstance.v1MarketplaceModelsIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Price id | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The price was deleted |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceModelsIdGet**
> ModelPrice v1MarketplaceModelsIdGet()

Read a single model rate your organization has published, by its id. A price belonging to another organization is not visible and reads as not found.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let id: string; //Price id (default to undefined)

const { status, data } = await apiInstance.v1MarketplaceModelsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Price id | defaults to undefined|


### Return type

**ModelPrice**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The price |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceModelsIdPatch**
> ModelPrice v1MarketplaceModelsIdPatch(body)

Change the rate or the descriptive fields of a model price you have published. Send only the fields you want to change. The fields that identify the price cannot be changed, because they describe a different SKU; delete the price and register a new one instead.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let id: string; //Price id (default to undefined)
let body: { [key: string]: any; }; //Fields to change

const { status, data } = await apiInstance.v1MarketplaceModelsIdPatch(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **{ [key: string]: any; }**| Fields to change | |
| **id** | [**string**] | Price id | defaults to undefined|


### Return type

**ModelPrice**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The changed price |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1MarketplaceModelsPost**
> PublishedModelPrices v1MarketplaceModelsPost(body)

Register your own token rates for models you host, so CostGraph can price calls it has no public rate for. Entries are versioned: a price change closes the current row and opens a new one, so spend already recorded keeps the rate it was billed at. The returned id is what you attach with the `costgraph.ai/pricing-id.model` label or tag. Each version carries its own id, so read the live entry back after a price change.

### Example

```typescript
import {
    MarketplaceApi,
    Configuration,
    ModelPricesRequest
} from '@baselinehq/pricingapi-client-typescript';

const configuration = new Configuration();
const apiInstance = new MarketplaceApi(configuration);

let body: ModelPricesRequest; //Prices to publish

const { status, data } = await apiInstance.v1MarketplaceModelsPost(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **ModelPricesRequest**| Prices to publish | |


### Return type

**PublishedModelPrices**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The published prices |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

