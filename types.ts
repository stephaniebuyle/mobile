export interface CollectionProps {
    "count": number,
    "artObjects": ArtObject[]
}

export interface CollectionDetailProps {
    "artObject" : ArtObjectDetail
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

export interface ArtObjectDetail {
    "acquisition": {
        "creditLine": string, 
        "date": Date, 
        "method": string
    }, 
    //"artistRole": null, 
    //"associations": [], 
    //"catRefRPK": [], 
    "classification": {
        "events": string[], 
        "iconClassDescription": string[], 
        "iconClassIdentifier": string[], 
        "motifs": string[], 
        "objectNumbers": string[], 
        "people": string[], 
        "periods": string[], 
        "places": string[]
    }, 
    "colors": Colors[], 
    //"colorsWithNormalization": [[Object], [Object], [Object], [Object], [Object], [Object], [Object]], 
    "copyrightHolder": string, 
    "dating": {
        "period": number, 
        "presentingDate": string, 
        "sortingDate": number, 
        "yearEarly": number, 
        "yearLate": number
    }, 
    "description": string, 
    "dimensions": Dimensions[], 
    //"documentation": [], 
    //"exhibitions": [], 
    "hasImage": boolean, 
    //"historicalPersons": [], 
    "id": string, 
    //"inscriptions": [], 
    "label": {
        "date": string, 
        "description": string, 
        "makerLine": string, 
        "notes": string, 
        "title": string
    }, 
    "labelText": string, 
    "language": string, 
    "links": {
        "search": string
    }, 
    "location": string, 
    "longTitle": string, 
    //"makers": string[], 
    "materials": string[], 
    //"normalized32Colors": Colors[], 
    //"normalizedColors": Colors[], 
    "objectCollection": string[], 
    "objectNumber": string, 
    "objectTypes": string[], 
    "physicalMedium": string, 
    //"physicalProperties": [], 
    "plaqueDescriptionDutch": string, 
    "plaqueDescriptionEnglish": string, 
    "principalMaker": string, 
    //"principalMakers": [[Object]], 
    "principalOrFirstMaker": string, 
    "priref": string, 
    "productionPlaces": string[], 
    "scLabelLine": string, 
    "showImage": boolean, 
    "subTitle": string, 
    "techniques": string[], 
    "title": string, 
    "titles": string[], 
    "webImage": {
        "guid": string, 
        "height": number, 
        "offsetPercentageX": number, 
        "offsetPercentageY": number, 
        "url": string, 
        "width": number
    }
}


export interface Colors {
    "percentage": number,
    "hex": string
}

export interface Dimensions {
    "unit": string,
    "type": string,
    "value": string
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

export interface FavoriteCardProps {
    detail: Detail, 
    navigation: any 
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
