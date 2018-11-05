import { ProviderModule } from './provider.module';

describe('ProviderModule', () => {
  let providerModule: ProviderModule;

  beforeEach(() => {
    providerModule = new ProviderModule();
  });

  it('should create an instance', () => {
    expect(providerModule).toBeTruthy();
  });
});
