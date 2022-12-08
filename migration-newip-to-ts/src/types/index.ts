interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface IResponse {
    status: string;
    sources: [...ISource[]];
}

export interface ILoader {
    baseLink: string;
    options: object;

    getResp({endpoint, options}: {endpoint: string, options?: object | undefined}, callback?: () => void) : void;
    errorHandler(res: IResponse): IResponse; 
    errorHandler<Type extends {ok: boolean, status: 401|404, statusText: string}>(res: Type): Type;
    makeUrl(options: object, endpoint: string): string;
    load (method: string, endpoint: string, callback: ()=> void, options: object): void;
   
}
