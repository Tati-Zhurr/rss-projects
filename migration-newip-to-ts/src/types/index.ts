interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface IResponseSources {
    status: string;
    sources: [...ISource[]];
}

export interface IResponseArticles {
  status: string;
  totalResults: number;
  articles: [...IArticle[]];
}
export interface IArticle {
      source: {id: string | null, name: string};
      author: string | null;
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
}

export interface ILoader {
    baseLink: string;
    options: object;

    getResp({endpoint, options}: {endpoint: string, options?: object | undefined}, callback?: () => void) : void;
    errorHandler(res: Response): Response; 
    makeUrl(options: object, endpoint: string): string;
    load (method: string, endpoint: string, callback: (data: IResponseArticles | IResponseSources)=> void, options: object): void;
}
