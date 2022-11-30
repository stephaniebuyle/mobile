export interface CollectionProps {
    "count": number,
    "artObjects": [
        {
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
    ]
}

export interface SelectionOption {
    "label": string,
    "parameter": string
}

export interface ItemProps{
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

export type ParamList = {
    Detail:{
        item: ItemProps
    }
}
