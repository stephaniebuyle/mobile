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
