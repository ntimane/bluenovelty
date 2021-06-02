import { TestBed } from '@angular/core/testing';

import { Api.GatewayService } from './api.gateway.service';

describe('Api.GatewayService', () => {
  let service: Api.GatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api.GatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
