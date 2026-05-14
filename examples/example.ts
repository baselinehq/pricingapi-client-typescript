import {
  Configuration,
  DefaultApi,
  GithubComBaselinehqGolangSharedTypesInstance,
  GithubComBaselinehqGolangSharedTypesVM,
} from '../';

async function main(): Promise<void> {
  const token = process.env.BASELINEHQ_CLOUD_API_KEY;
  if (!token) {
    throw new Error('Missing BASELINEHQ_CLOUD_API_KEY environment variable');
  }

  // Example SDK configuration for TypeScript generators.
  const config = new Configuration({
    basePath: 'https://pricing.baselinehq.cloud',
    accessToken: token,
  });

  const api = new DefaultApi(config);

  const vm = new GithubComBaselinehqGolangSharedTypesVM();
  vm.cpuCores = 2;
  vm.ramGb = 2;

  const instance = new GithubComBaselinehqGolangSharedTypesInstance();
  instance.instanceType = 's-2vcpu-2gb';
  instance.usageType = 'ONDEMAND';
  instance.provider = 'DigitalOcean';
  instance.operatingSystem = 'linux';
  instance.service = 'Droplet';
  instance.region = 'nyc1';
  instance.vm = vm;

  const pricing = await api.pricingComputePost({ instance });
  console.log(JSON.stringify(pricing.data, null, 2));
}

main().catch((error) => {
  console.error('Pricing API TypeScript example failed:', error);
  process.exit(1);
});
