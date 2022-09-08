export type ISearchResult = {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    prevPageToken?: string;
    regionCode:    string;
    pageInfo:      PageInfo;
    items:         Item[];
}

export type Item = {
    kind:    string;
    etag:    string;
    id:      Id;
    snippet: Snippet;
}

export type Id = {
    kind:       string;
    channelId?: string;
    videoId?:   string;
}

export type Snippet = {
    publishedAt:          string;
    channelId:            string;
    title:                string;
    description:          string;
    thumbnails:           Thumbnails;
    channelTitle:         string;
    liveBroadcastContent: string;
    publishTime:          string;
}

export type Thumbnails = {
    default: Default;
    medium:  Default;
    high:    Default;
}

export type Default = {
    url:     string;
    width?:  number;
    height?: number;
}

export type PageInfo = {
    totalResults:   number;
    resultsPerPage: number;
}
