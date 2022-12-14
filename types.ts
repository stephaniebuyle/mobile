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
    "id": string,
    "objectNumber": string,
    "title": string,
    "principalOrFirstMaker": string,
    "webImage": {
        "url": string,
    },
    "productionPlaces": string[]
}

export type ParamList = {
    Detail:{
        item: ItemProps
    }
}

export type Expo = {
    startDate: Date,
    endDate: Date,
    title: string,
    description: string,
    image: string
}
