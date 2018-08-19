import { TestBed, inject } from '@angular/core/testing';
import { HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RedditService } from './reddit.service';
import { redditResponse } from './reddit.mock';

describe('RedditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RedditService]
    });
  });

  it('should be created', inject([RedditService], (service: RedditService) => {
    expect(service).toBeTruthy();
  }));

  describe('getLegoData', () => {
    it('should hit the reddit api and get lego data',
      inject([RedditService, HttpTestingController], (redditService: RedditService, backend: HttpTestingController) => {
        redditService.getLegoData().subscribe((res) => {
          expect(res).toEqual(redditResponse);
        });

        backend.expectOne((req: HttpRequest<any>) => {
          expect(req.method).toEqual('GET');
          expect(req.url).toEqual('https://www.reddit.com/r/lego.json');
          return true;
        }).flush(redditResponse);
      })
    )
  });
});
