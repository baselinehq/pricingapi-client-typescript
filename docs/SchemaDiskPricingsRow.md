# SchemaDiskPricingsRow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_zone** | **string** |  | [optional] [default to undefined]
**cost_per_gb_hour** | **number** |  | [optional] [default to undefined]
**cost_per_iops_hour** | **number** |  | [optional] [default to undefined]
**cost_per_throughput_mbps_hour** | **number** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**max_capacity_gb** | **number** |  | [optional] [default to undefined]
**max_iops** | **number** |  | [optional] [default to undefined]
**max_throughput_mbps** | **number** |  | [optional] [default to undefined]
**min_capacity_gb** | **number** |  | [optional] [default to undefined]
**min_iops** | **number** |  | [optional] [default to undefined]
**min_throughput_mbps** | **number** |  | [optional] [default to undefined]
**period_billing_hours** | **number** |  | [optional] [default to undefined]
**provider** | **string** |  | [optional] [default to undefined]
**raw_pricing_data** | **object** |  | [optional] [default to undefined]
**region** | **string** |  | [optional] [default to undefined]
**service** | **string** |  | [optional] [default to undefined]
**tags** | **object** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]
**usage_type** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SchemaDiskPricingsRow } from '@baselinehq/pricingapi-client-typescript';

const instance: SchemaDiskPricingsRow = {
    availability_zone,
    cost_per_gb_hour,
    cost_per_iops_hour,
    cost_per_throughput_mbps_hour,
    created_at,
    id,
    max_capacity_gb,
    max_iops,
    max_throughput_mbps,
    min_capacity_gb,
    min_iops,
    min_throughput_mbps,
    period_billing_hours,
    provider,
    raw_pricing_data,
    region,
    service,
    tags,
    type,
    updated_at,
    usage_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
