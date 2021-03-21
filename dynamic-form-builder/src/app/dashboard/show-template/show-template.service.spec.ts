import { TestBed } from '@angular/core/testing';

import { ShowTemplateService } from './show-template.service';

describe('ShowTemplateService', () => {
  let service: ShowTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
