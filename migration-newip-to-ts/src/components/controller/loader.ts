import {IRequestParameters, IResponseArticles, IResponseSources, ResponseErrors} from '../../types/index';

const error401: ResponseErrors = ResponseErrors.unauthorized;
const error404: ResponseErrors = ResponseErrors.brokenLink;

class Loader {
   readonly baseLink: string;
    options: { [key: string]: string };

    constructor(baseLink: string, options: Partial<IRequestParameters>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: {endpoint: string, options?: Partial<IRequestParameters>},
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

   errorHandler (res: Response): Response {
        if (!res.ok) {
            if (res.status === error401 || res.status === error404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

   makeUrl(options: { [key: string]: string }, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load (method: string, endpoint: string, callback: (data: IResponseArticles | IResponseSources) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: IResponseArticles | IResponseSources ) => callback(data))
            .catch((err: string) => console.error(err));
    }
}

export default Loader;
