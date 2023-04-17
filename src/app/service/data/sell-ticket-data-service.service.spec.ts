import { TestBed } from '@angular/core/testing';

import { SellTicketDataServiceService } from './sell-ticket-data-service.service';

describe('SellTicketDataServiceService', () => {
  let service: SellTicketDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellTicketDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
