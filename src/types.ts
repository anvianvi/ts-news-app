enum ResStatus {
    Ok = 'ok',
    Error = 'error',
}

export type NameOfNewsSource = {
    id: string;
    name: string;
};

export type Article = {
    source: NameOfNewsSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

export type ISource = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};

type BaseResponse = {
    status: ResStatus;
};

export type ISourcesResponse = BaseResponse & {
    sources: ISource[];
};

export type IArticlesResponse = BaseResponse & {
    totalResults: number;
    articles: Article[];
};
