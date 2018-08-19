class RedditPostData {
  kind: string;
  data: {
    preview: {
      images: [
        {
          id: string,
          source: {
            height: number,
            url: string,
            width: number
          }
        }
      ]
    }
  };
}

export class RedditResponse {
  data: {
    after: string;
    before: string;
    children: RedditPostData[],
    dist: number;
  };
}
