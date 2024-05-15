import { TestBed } from '@angular/core/testing';

import { CouterAgentService } from './couter-agent.service';

describe('CouterAgentService', () => {
  let service: CouterAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouterAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
