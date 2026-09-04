## @baselinehq/pricingapi-client-typescript@0.2.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @baselinehq/pricingapi-client-typescript@0.2.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://pricing.baselinehq.cloud*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**healthzGet**](docs/DefaultApi.md#healthzget) | **GET** /healthz | Health check endpoint
*DefaultApi* | [**marketplaceProvidersComputeDelete**](docs/DefaultApi.md#marketplaceproviderscomputedelete) | **DELETE** /marketplace/providers/compute | Delete a custom provider instance
*DefaultApi* | [**marketplaceProvidersComputeGet**](docs/DefaultApi.md#marketplaceproviderscomputeget) | **GET** /marketplace/providers/compute | Get your custom pricing entries
*DefaultApi* | [**marketplaceProvidersComputePost**](docs/DefaultApi.md#marketplaceproviderscomputepost) | **POST** /marketplace/providers/compute | Register a custom provider
*DefaultApi* | [**marketplaceProvidersDatabasesDelete**](docs/DefaultApi.md#marketplaceprovidersdatabasesdelete) | **DELETE** /marketplace/providers/databases | Delete a custom database pricing entry
*DefaultApi* | [**marketplaceProvidersDatabasesGet**](docs/DefaultApi.md#marketplaceprovidersdatabasesget) | **GET** /marketplace/providers/databases | Get your custom database pricing entries
*DefaultApi* | [**marketplaceProvidersDatabasesPost**](docs/DefaultApi.md#marketplaceprovidersdatabasespost) | **POST** /marketplace/providers/databases | Register custom database pricing
*DefaultApi* | [**marketplaceProvidersDisksDelete**](docs/DefaultApi.md#marketplaceprovidersdisksdelete) | **DELETE** /marketplace/providers/disks | Delete a custom disk provider entry
*DefaultApi* | [**marketplaceProvidersDisksGet**](docs/DefaultApi.md#marketplaceprovidersdisksget) | **GET** /marketplace/providers/disks | Get your custom disk pricing entries
*DefaultApi* | [**marketplaceProvidersDisksPost**](docs/DefaultApi.md#marketplaceprovidersdiskspost) | **POST** /marketplace/providers/disks | Register a custom disk provider
*DefaultApi* | [**marketplaceProvidersModelsDelete**](docs/DefaultApi.md#marketplaceprovidersmodelsdelete) | **DELETE** /marketplace/providers/models | Delete a custom model pricing entry
*DefaultApi* | [**marketplaceProvidersModelsGet**](docs/DefaultApi.md#marketplaceprovidersmodelsget) | **GET** /marketplace/providers/models | Get your custom model pricing entries
*DefaultApi* | [**marketplaceProvidersModelsPost**](docs/DefaultApi.md#marketplaceprovidersmodelspost) | **POST** /marketplace/providers/models | Register custom model pricing
*DefaultApi* | [**pricingComputePost**](docs/DefaultApi.md#pricingcomputepost) | **POST** /pricing/compute | Get pricing for an instance
*DefaultApi* | [**pricingDisksPost**](docs/DefaultApi.md#pricingdiskspost) | **POST** /pricing/disks | Get pricing for a disk
*DefaultApi* | [**pricingPost**](docs/DefaultApi.md#pricingpost) | **POST** /pricing | Get pricing for an instance
*DefaultApi* | [**providersGet**](docs/DefaultApi.md#providersget) | **GET** /providers | Get details for the providers
*DefaultApi* | [**recommendationsComputePost**](docs/DefaultApi.md#recommendationscomputepost) | **POST** /recommendations/compute | Get recommendations for compute instances
*DefaultApi* | [**recommendationsDisksPost**](docs/DefaultApi.md#recommendationsdiskspost) | **POST** /recommendations/disks | Get recommendations for disks
*DefaultApi* | [**recommendationsPost**](docs/DefaultApi.md#recommendationspost) | **POST** /recommendations | Get recommendations for compute instances
*MarketplaceApi* | [**v1MarketplaceComputeGet**](docs/MarketplaceApi.md#v1marketplacecomputeget) | **GET** /v1/marketplace/compute | List your compute prices
*MarketplaceApi* | [**v1MarketplaceComputeIdDelete**](docs/MarketplaceApi.md#v1marketplacecomputeiddelete) | **DELETE** /v1/marketplace/compute/{id} | Delete one compute price
*MarketplaceApi* | [**v1MarketplaceComputeIdGet**](docs/MarketplaceApi.md#v1marketplacecomputeidget) | **GET** /v1/marketplace/compute/{id} | Read one compute price
*MarketplaceApi* | [**v1MarketplaceComputeIdPatch**](docs/MarketplaceApi.md#v1marketplacecomputeidpatch) | **PATCH** /v1/marketplace/compute/{id} | Change one compute price
*MarketplaceApi* | [**v1MarketplaceComputePost**](docs/MarketplaceApi.md#v1marketplacecomputepost) | **POST** /v1/marketplace/compute | Publish compute prices
*MarketplaceApi* | [**v1MarketplaceDatabasesGet**](docs/MarketplaceApi.md#v1marketplacedatabasesget) | **GET** /v1/marketplace/databases | List your database prices
*MarketplaceApi* | [**v1MarketplaceDatabasesIdDelete**](docs/MarketplaceApi.md#v1marketplacedatabasesiddelete) | **DELETE** /v1/marketplace/databases/{id} | Delete one database price
*MarketplaceApi* | [**v1MarketplaceDatabasesIdGet**](docs/MarketplaceApi.md#v1marketplacedatabasesidget) | **GET** /v1/marketplace/databases/{id} | Read one database price
*MarketplaceApi* | [**v1MarketplaceDatabasesIdPatch**](docs/MarketplaceApi.md#v1marketplacedatabasesidpatch) | **PATCH** /v1/marketplace/databases/{id} | Change one database price
*MarketplaceApi* | [**v1MarketplaceDatabasesPost**](docs/MarketplaceApi.md#v1marketplacedatabasespost) | **POST** /v1/marketplace/databases | Publish database prices
*MarketplaceApi* | [**v1MarketplaceDisksGet**](docs/MarketplaceApi.md#v1marketplacedisksget) | **GET** /v1/marketplace/disks | List your disk prices
*MarketplaceApi* | [**v1MarketplaceDisksIdDelete**](docs/MarketplaceApi.md#v1marketplacedisksiddelete) | **DELETE** /v1/marketplace/disks/{id} | Delete one disk price
*MarketplaceApi* | [**v1MarketplaceDisksIdGet**](docs/MarketplaceApi.md#v1marketplacedisksidget) | **GET** /v1/marketplace/disks/{id} | Read one disk price
*MarketplaceApi* | [**v1MarketplaceDisksIdPatch**](docs/MarketplaceApi.md#v1marketplacedisksidpatch) | **PATCH** /v1/marketplace/disks/{id} | Change one disk price
*MarketplaceApi* | [**v1MarketplaceDisksPost**](docs/MarketplaceApi.md#v1marketplacediskspost) | **POST** /v1/marketplace/disks | Publish disk prices
*MarketplaceApi* | [**v1MarketplaceFiltersKindGet**](docs/MarketplaceApi.md#v1marketplacefilterskindget) | **GET** /v1/marketplace/filters/{kind} | List the filters a price kind accepts
*MarketplaceApi* | [**v1MarketplaceModelsGet**](docs/MarketplaceApi.md#v1marketplacemodelsget) | **GET** /v1/marketplace/models | List your model prices
*MarketplaceApi* | [**v1MarketplaceModelsIdDelete**](docs/MarketplaceApi.md#v1marketplacemodelsiddelete) | **DELETE** /v1/marketplace/models/{id} | Delete one model price
*MarketplaceApi* | [**v1MarketplaceModelsIdGet**](docs/MarketplaceApi.md#v1marketplacemodelsidget) | **GET** /v1/marketplace/models/{id} | Read one model price
*MarketplaceApi* | [**v1MarketplaceModelsIdPatch**](docs/MarketplaceApi.md#v1marketplacemodelsidpatch) | **PATCH** /v1/marketplace/models/{id} | Change one model price
*MarketplaceApi* | [**v1MarketplaceModelsPost**](docs/MarketplaceApi.md#v1marketplacemodelspost) | **POST** /v1/marketplace/models | Publish model prices
*PricingApi* | [**v1PricingComputePost**](docs/PricingApi.md#v1pricingcomputepost) | **POST** /v1/pricing/compute | Price a machine
*PricingApi* | [**v1PricingDisksPost**](docs/PricingApi.md#v1pricingdiskspost) | **POST** /v1/pricing/disks | Price a volume
*ProvidersApi* | [**v1ProvidersGet**](docs/ProvidersApi.md#v1providersget) | **GET** /v1/providers | List the providers CostGraph prices
*RecommendationsApi* | [**v1RecommendationsComputePost**](docs/RecommendationsApi.md#v1recommendationscomputepost) | **POST** /v1/recommendations/compute | Find cheaper machines
*RecommendationsApi* | [**v1RecommendationsDisksPost**](docs/RecommendationsApi.md#v1recommendationsdiskspost) | **POST** /v1/recommendations/disks | Find cheaper volumes
*ServiceApi* | [**v1HealthzGet**](docs/ServiceApi.md#v1healthzget) | **GET** /v1/healthz | Check the service is live


### Documentation For Models

 - [ComputePrice](docs/ComputePrice.md)
 - [ComputePriceList](docs/ComputePriceList.md)
 - [ComputePricePage](docs/ComputePricePage.md)
 - [ComputePricesRequest](docs/ComputePricesRequest.md)
 - [ComputeRecommendation](docs/ComputeRecommendation.md)
 - [ComputeRecommendationRequest](docs/ComputeRecommendationRequest.md)
 - [DatabasePrice](docs/DatabasePrice.md)
 - [DatabasePriceList](docs/DatabasePriceList.md)
 - [DatabasePricePage](docs/DatabasePricePage.md)
 - [DatabasePricesRequest](docs/DatabasePricesRequest.md)
 - [Disk](docs/Disk.md)
 - [DiskPrice](docs/DiskPrice.md)
 - [DiskPriceList](docs/DiskPriceList.md)
 - [DiskPricePage](docs/DiskPricePage.md)
 - [DiskPricesRequest](docs/DiskPricesRequest.md)
 - [DiskRecommendation](docs/DiskRecommendation.md)
 - [DiskRecommendationRequest](docs/DiskRecommendationRequest.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [FieldError](docs/FieldError.md)
 - [FilterSet](docs/FilterSet.md)
 - [GithubComBaselinehqGolangSharedTypesInstance](docs/GithubComBaselinehqGolangSharedTypesInstance.md)
 - [GithubComBaselinehqGolangSharedTypesProvider](docs/GithubComBaselinehqGolangSharedTypesProvider.md)
 - [GithubComBaselinehqGolangSharedTypesUsageType](docs/GithubComBaselinehqGolangSharedTypesUsageType.md)
 - [GithubComBaselinehqGolangSharedTypesVM](docs/GithubComBaselinehqGolangSharedTypesVM.md)
 - [Instance](docs/Instance.md)
 - [ModelPrice](docs/ModelPrice.md)
 - [ModelPriceList](docs/ModelPriceList.md)
 - [ModelPricePage](docs/ModelPricePage.md)
 - [ModelPricesRequest](docs/ModelPricesRequest.md)
 - [Page](docs/Page.md)
 - [Problem](docs/Problem.md)
 - [ProviderConfig](docs/ProviderConfig.md)
 - [PublishedComputePrices](docs/PublishedComputePrices.md)
 - [PublishedDatabasePrices](docs/PublishedDatabasePrices.md)
 - [PublishedDiskPrices](docs/PublishedDiskPrices.md)
 - [PublishedModelPrices](docs/PublishedModelPrices.md)
 - [RegisteredComputePrices](docs/RegisteredComputePrices.md)
 - [RegisteredDatabasePrices](docs/RegisteredDatabasePrices.md)
 - [RegisteredDiskPrices](docs/RegisteredDiskPrices.md)
 - [RegisteredModelPrices](docs/RegisteredModelPrices.md)
 - [RegistrationStatus](docs/RegistrationStatus.md)
 - [TypesDisk](docs/TypesDisk.md)
 - [TypesPredicates](docs/TypesPredicates.md)
 - [TypesSavings](docs/TypesSavings.md)
 - [TypesService](docs/TypesService.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header

<a id="BearerAuth"></a>
### BearerAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

