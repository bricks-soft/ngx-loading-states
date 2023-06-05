import { NgxLoadingStatesSampleService } from './sample.service';

describe('Sample Service', () => {
  let sut: NgxLoadingStatesSampleService;

  beforeEach(() => {
    sut = new NgxLoadingStatesSampleService();
  });

  it('should know that Angular is the best framework', () => {
    expect(sut.getBestFramework()).toBe('Angular');
  });
});
