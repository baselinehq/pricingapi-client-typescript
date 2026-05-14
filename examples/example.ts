import { DefaultApi } from '../api';
import { Configuration } from '../configuration';
import axios from 'axios';
import type {
  GithubComBaselinehqGolangSharedTypesInstance,
  GithubComBaselinehqGolangSharedTypesVM,
} from '../api';

async function main(): Promise<void> {
  const token = process.env.BASELINEHQ_CLOUD_API_KEY;
  if (!token) {
    throw new Error('Missing BASELINEHQ_CLOUD_API_KEY environment variable');
  }

  // Example SDK configuration for TypeScript generators.
  const config = new Configuration({
    basePath: 'https://pricing.baselinehq.cloud',
    apiKey: (name: string) => (name === 'X-API-Key' ? token : undefined),
  });

  const api = new DefaultApi(config);

  const vm: GithubComBaselinehqGolangSharedTypesVM = {
    cpu_cores: 2,
    ram_gb: 2,
  };

  const instance: GithubComBaselinehqGolangSharedTypesInstance = {
    "region": "nyc1",
    "instance_type": "s-2vcpu-2gb",
    "usage_type": "ONDEMAND",
    "provider": "DigitalOcean",
    "operating_system": "linux",
    "service": "Droplet",
    "availability_zone": "",
    "use_base_pricing": true,
    vm,
  };

  const pricing = await api.pricingComputePost({ instance });
  console.log(JSON.stringify(pricing.data, null, 2));
}

main().catch((error) => {
  if (axios.isAxiosError(error)) {
    console.error('Pricing API request failed', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      endpoint: error.config?.url,
    });
  } else {
    console.error('Pricing API TypeScript example failed:', error);
  }
  process.exit(1);
});
