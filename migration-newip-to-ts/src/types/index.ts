import { Callback1, Callback2 } from "../components/controller/controller";
export interface ISource {
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

    getResp({endpoint, options}: {endpoint: string, options?: Partial<IRequestParameters>}, callback?: () => void) : void;
    errorHandler(res: Response): Response; 
    makeUrl(options: Partial<IRequestParameters>, endpoint: string): string;
    load (method: string, endpoint: string, callback: (data: IResponseArticles | IResponseSources)=> void, options: Partial<IRequestParameters>): void;
}

export interface INews {
    draw(data: IArticle[]): void;
}

export interface ISources {
    draw(data: ISource[]): void;
}


export interface IAppController {
    getSources(callback: Callback2): void;
    getNews(e: Event, callback: Callback1): void;
}

export interface IAppView {
    news: INews; 
    sources: ISources;

    drawNews(data: IResponseArticles | undefined): void;
    drawSources(data: IResponseSources | undefined): void;
}


export interface IRequestParameters {
    apiKey: string;
    q: string;
    searchIn: string;
    sources: string;
    domains: string;
    excludeDomains: string;
    from: string;
    to: string;
    language: string;
    sortBy: string;
    pageSize: number;
    page: number;
}

export enum ResponseErrors{
  ok = 200,
  badRequest = 400,
  unauthorized = 401,
  brokenLink = 404,
  tooManyRequest = 429,
  serverError = 500,
}