# DiskRecommendationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_metadata** | **boolean** |  | [optional] [default to undefined]
**instance** | [**TypesDisk**](TypesDisk.md) |  | [optional] [default to undefined]
**predicates** | [**TypesPredicates**](TypesPredicates.md) |  | [optional] [default to undefined]
**usage** | [**TypesDisk**](TypesDisk.md) |  | [optional] [default to undefined]
**workload_class** | **string** | WorkloadClass selects which accelerator gates a compute recommendation applies: inference_single, inference_multi or training_distributed. Empty means inference_multi, which is what the recommender did before the classes existed. Disk requests do not carry one. | [optional] [default to undefined]

## Example

```typescript
import { DiskRecommendationRequest } from '@baselinehq/pricingapi-client-typescript';

const instance: DiskRecommendationRequest = {
    include_metadata,
    instance,
    predicates,
    usage,
    workload_class,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
