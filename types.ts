export interface CollectionProps {
    "count": number,
    "artObjects": ArtObject[]
}
export interface ArtObject {
        "links": {
            "self": string,
            "web": string,
        },
        "id": string,
        "objectNumber": string,
        "title": string,
        "hasImage": boolean,
        "principalOrFirstMaker": string,
        "longTitle": string,
        "showImage": boolean,
        "permitDownload": boolean,
        "webImage": {
            "guid": string
            "offsetPercentageX": number,
            "offsetPercentageY": number,
            "width": number,
            "height": number,
            "url": string,
        },
        "headerImage": {
            "guid": string,
            "offsetPercentageX": number,
            "offsetPercentageY": number,
            "width": number,
            "height": number,
            "url": string
        },
        "productionPlaces": string[]
}

export interface CardProps {
    item: ArtObject;
    navigation: any;
}
export interface PaginationProps {
    callbackSetPage: (value: number) => void;
    count: number,
    page: number
}
export interface SearchProps {

    callbackSetSearch: (value: string) => void;
    callbackSetField: (value: string) => void;
    callbackRunSearch: () => void;
    fieldValue: string;
    searchValue : string;

}

export interface SearchResultProps {
    navigation: any,
    collectionData?: CollectionProps
}

export interface ItemProps{
    "id": string,
    "objectNumber": string,
    "title": string,
    "principalOrFirstMaker": string,
    "webImage": {
        "url": string,
    },
    "productionPlaces": string[]
}

export type Detail = {
    "key": string, 
    "params": {
        "item": {
            "hasImage": boolean, 
            "headerImage": {
                "guid": string,
                "offsetPercentageX": number,
                "offsetPercentageY": number,
                "width": number,
                "height": number,
                "url": string
            }, 
            "id": string, 
            "links": {
                "self": string,
                "web": string,
            }, 
            "longTitle": string, 
            "objectNumber": string, 
            "principalOrFirstMaker": string, 
            "productionPlaces": string[], 
            "showImage": boolean, 
            "title": string, 
            "webImage": {
                "url": string,
            }
        }
    }
}

export type Expo = {
    startDate: Date,
    endDate: Date,
    title: string,
    description: string,
    subtitle: string,
    image: string
}
