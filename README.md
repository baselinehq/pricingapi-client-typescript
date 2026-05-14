## @baselinehq/pricingapi-client-typescript@0.1.0

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
npm install @baselinehq/pricingapi-client-typescript@0.1.0 --save
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
*DefaultApi* | [**marketplaceProvidersDisksDelete**](docs/DefaultApi.md#marketplaceprovidersdisksdelete) | **DELETE** /marketplace/providers/disks | Delete a custom disk provider entry
*DefaultApi* | [**marketplaceProvidersDisksGet**](docs/DefaultApi.md#marketplaceprovidersdisksget) | **GET** /marketplace/providers/disks | Get your custom disk pricing entries
*DefaultApi* | [**marketplaceProvidersDisksPost**](docs/DefaultApi.md#marketplaceprovidersdiskspost) | **POST** /marketplace/providers/disks | Register a custom disk provider
*DefaultApi* | [**pricingComputePost**](docs/DefaultApi.md#pricingcomputepost) | **POST** /pricing/compute | Get pricing for an instance
*DefaultApi* | [**pricingDisksPost**](docs/DefaultApi.md#pricingdiskspost) | **POST** /pricing/disks | Get pricing for a disk
*DefaultApi* | [**pricingPost**](docs/DefaultApi.md#pricingpost) | **POST** /pricing | Get pricing for an instance
*DefaultApi* | [**providersGet**](docs/DefaultApi.md#providersget) | **GET** /providers | Get details for the providers
*DefaultApi* | [**recommendationsComputePost**](docs/DefaultApi.md#recommendationscomputepost) | **POST** /recommendations/compute | Get recommendations for compute instances
*DefaultApi* | [**recommendationsDisksPost**](docs/DefaultApi.md#recommendationsdiskspost) | **POST** /recommendations/disks | Get recommendations for disks
*DefaultApi* | [**recommendationsPost**](docs/DefaultApi.md#recommendationspost) | **POST** /recommendations | Get recommendations for compute instances


### Documentation For Models

 - [GithubComBaselinehqGolangSharedTypesInstance](docs/GithubComBaselinehqGolangSharedTypesInstance.md)
 - [GithubComBaselinehqGolangSharedTypesProvider](docs/GithubComBaselinehqGolangSharedTypesProvider.md)
 - [GithubComBaselinehqGolangSharedTypesUsageType](docs/GithubComBaselinehqGolangSharedTypesUsageType.md)
 - [GithubComBaselinehqGolangSharedTypesVM](docs/GithubComBaselinehqGolangSharedTypesVM.md)
 - [GithubComBaselinehqPricingapiPkgTypesStatus](docs/GithubComBaselinehqPricingapiPkgTypesStatus.md)
 - [HandlerErrorResponse](docs/HandlerErrorResponse.md)
 - [ProviderConfig](docs/ProviderConfig.md)
 - [SchemaComputePricingsRow](docs/SchemaComputePricingsRow.md)
 - [SchemaDiskPricingsRow](docs/SchemaDiskPricingsRow.md)
 - [TypesComputeRequest](docs/TypesComputeRequest.md)
 - [TypesComputeResultsValueInner](docs/TypesComputeResultsValueInner.md)
 - [TypesCustomDiskPriceRequest](docs/TypesCustomDiskPriceRequest.md)
 - [TypesCustomDiskPricingResponse](docs/TypesCustomDiskPricingResponse.md)
 - [TypesCustomPriceRequest](docs/TypesCustomPriceRequest.md)
 - [TypesCustomPricingResponse](docs/TypesCustomPricingResponse.md)
 - [TypesDisk](docs/TypesDisk.md)
 - [TypesDiskRequest](docs/TypesDiskRequest.md)
 - [TypesDiskResultsValueInner](docs/TypesDiskResultsValueInner.md)
 - [TypesMarketplaceDiskProvidersResponse](docs/TypesMarketplaceDiskProvidersResponse.md)
 - [TypesMarketplaceProvidersResponse](docs/TypesMarketplaceProvidersResponse.md)
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

