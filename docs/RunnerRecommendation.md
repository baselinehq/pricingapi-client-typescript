# RunnerRecommendation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billed_seconds** | **number** |  | [optional] [default to undefined]
**compute_source** | **string** |  | [optional] [default to undefined]
**cost** | **number** |  | [optional] [default to undefined]
**cost_per_month** | **number** |  | [optional] [default to undefined]
**fetched_on** | **string** |  | [optional] [default to undefined]
**flags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**plan_fees** | [**Array&lt;TypesRunnerPlanFee&gt;**](TypesRunnerPlanFee.md) |  | [optional] [default to undefined]
**pricing_model** | **string** |  | [optional] [default to undefined]
**provider** | **string** |  | [optional] [default to undefined]
**runtime_seconds** | **number** |  | [optional] [default to undefined]
**savings_vs_current** | **number** |  | [optional] [default to undefined]
**sku** | **string** |  | [optional] [default to undefined]
**source_url** | **string** |  | [optional] [default to undefined]
**vm_instance_type** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { RunnerRecommendation } from '@baselinehq/pricingapi-client-typescript';

const instance: RunnerRecommendation = {
    billed_seconds,
    compute_source,
    cost,
    cost_per_month,
    fetched_on,
    flags,
    plan_fees,
    pricing_model,
    provider,
    runtime_seconds,
    savings_vs_current,
    sku,
    source_url,
    vm_instance_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
