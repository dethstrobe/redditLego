import { RedditResponse } from './reddit.model';

export const redditResponse: RedditResponse = {
  data: {
    after: 't3_98d1ts',
    before: null,
    children: [
      {
        kind: 'something',
        data: {
          preview: {
            images: [
              {
                id: 'randomhash',
                source: {
                  height: 1800,
                  url: 'http://someaddress',
                  width: 1200
                }
              }
            ]
          }
        }
      }
    ],
    dist: 27
  }
};
