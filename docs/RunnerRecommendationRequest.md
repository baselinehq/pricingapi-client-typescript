# RunnerRecommendationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billed_minutes** | **number** |  | [optional] [default to undefined]
**current** | [**TypesRunnerCurrent**](TypesRunnerCurrent.md) |  | [optional] [default to undefined]
**job_count** | **number** |  | [optional] [default to undefined]
**jobs_seconds** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**monthly_minutes** | **number** |  | [optional] [default to undefined]
**public_repo** | **boolean** |  | [optional] [default to undefined]
**self_hosted** | [**TypesRunnerSelfHosted**](TypesRunnerSelfHosted.md) |  | [optional] [default to undefined]
**shape** | [**TypesRunnerShape**](TypesRunnerShape.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RunnerRecommendationRequest } from '@baselinehq/pricingapi-client-typescript';

const instance: RunnerRecommendationRequest = {
    billed_minutes,
    current,
    job_count,
    jobs_seconds,
    monthly_minutes,
    public_repo,
    self_hosted,
    shape,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
