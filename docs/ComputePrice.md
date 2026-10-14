# ComputePrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **string** |  | [optional] [default to undefined]
**availability_zone** | **string** |  | [optional] [default to undefined]
**cost_per_hour** | **number** | On-demand-equivalent hourly USD; multiply by provider_pricing_rules.month_hours for monthly. | [optional] [default to undefined]
**cpu_cores** | **number** |  | [optional] [default to undefined]
**cpu_cores_cost_per_hour** | **number** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**currency** | **string** | Currency the provider published this price in. Cost columns are always normalized USD. | [optional] [default to undefined]
**gpu_cost_per_hour** | **number** |  | [optional] [default to undefined]
**gpu_count** | **number** |  | [optional] [default to undefined]
**gpu_type** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**instance_type** | **string** |  | [optional] [default to undefined]
**native_cost_per_hour** | **number** | cost_per_hour as published, before FX normalization. Zero when currency is USD. | [optional] [default to undefined]
**operating_system** | **string** |  | [optional] [default to undefined]
**period_billing_hours** | **number** | Commitment term the raw price covers: 1&#x3D;hourly on-demand; 8640/25920/43200&#x3D;1mo/3mo/1yr buckets. cost_per_hour is already normalized to hourly. | [optional] [default to undefined]
**provider** | **string** |  | [optional] [default to undefined]
**ram_gb** | **number** |  | [optional] [default to undefined]
**ram_gb_cost_per_hour** | **number** |  | [optional] [default to undefined]
**raw_pricing_data** | **object** |  | [optional] [default to undefined]
**region** | **string** |  | [optional] [default to undefined]
**resizable** | **boolean** | True when the row carries per-vCPU and per-GB rates for a shape sized at launch; resolution stores and returns a row priced at the requested vCPU and memory. NULL or false is a fixed-size shape. | [optional] [default to undefined]
**service** | **string** |  | [optional] [default to undefined]
**tags** | **object** |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]
**usage_type** | **string** | Pricing tier token (ONDEMAND, RESERVED, SPOT_*, *_HBP, *_BYOL, Commit1Yr/3Yr). Filter to ONDEMAND for normal pricing. | [optional] [default to undefined]

## Example

```typescript
import { ComputePrice } from '@baselinehq/pricingapi-client-typescript';

const instance: ComputePrice = {
    architecture,
    availability_zone,
    cost_per_hour,
    cpu_cores,
    cpu_cores_cost_per_hour,
    created_at,
    currency,
    gpu_cost_per_hour,
    gpu_count,
    gpu_type,
    id,
    instance_type,
    native_cost_per_hour,
    operating_system,
    period_billing_hours,
    provider,
    ram_gb,
    ram_gb_cost_per_hour,
    raw_pricing_data,
    region,
    resizable,
    service,
    tags,
    updated_at,
    usage_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
