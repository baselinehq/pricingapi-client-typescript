# Disk


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_zone** | **string** |  | [optional] [default to undefined]
**capacity_gb** | **number** |  | [optional] [default to undefined]
**fallback_to_base_pricing** | **boolean** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**iops** | **number** |  | [optional] [default to undefined]
**provider** | [**GithubComBaselinehqGolangSharedTypesProvider**](GithubComBaselinehqGolangSharedTypesProvider.md) |  | [optional] [default to undefined]
**region** | **string** |  | [optional] [default to undefined]
**service** | [**TypesService**](TypesService.md) |  | [optional] [default to undefined]
**throughput_mbps** | **number** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**usage_type** | [**GithubComBaselinehqGolangSharedTypesUsageType**](GithubComBaselinehqGolangSharedTypesUsageType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Disk } from '@baselinehq/pricingapi-client-typescript';

const instance: Disk = {
    availability_zone,
    capacity_gb,
    fallback_to_base_pricing,
    id,
    iops,
    provider,
    region,
    service,
    throughput_mbps,
    type,
    usage_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
