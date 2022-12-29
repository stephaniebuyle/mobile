import { RouteProp } from "@react-navigation/native";

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
    "hasImage": boolean, 
    "id": string, 
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
    "materials": string[], 
    "objectCollection": string[], 
    "objectNumber": string, 
    "objectTypes": string[], 
    "physicalMedium": string, 
    "plaqueDescriptionDutch": string, 
    "plaqueDescriptionEnglish": string, 
    "principalMaker": string, 
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

/* Interface voor de cards */ 
export interface CardProps {
    item: ArtObject;
    navigation: any;
}

/* Interface Pagination */ 
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

/* interface FavoriteCard */ 
export interface FavoriteCardProps {
    detail: Detail, 
    navigation: any 
}

/* interfaces datepicker */
export interface AgendaProps {
    expo: Expo;
  }
  
export interface EventDetails {
    title: string,
    startDate: Date,
    endDate: Date
  }

/* interface SearchCard */
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
  
/* interface DetailDescription */ 
export interface DetailDescriptionProps {
    data?: ArtObjectDetail;
}

/* interface DetailToFavorites */ 
export interface DetailToFavoritesProps {
    data: Detail;
}

/* inerface DetailImage */ 

export interface DetailImageProps {
    uri: string
  }
  

/* Expo component */
export type Expo = {
    startDate: Date,
    endDate: Date,
    title: string,
    description: string,
    subtitle: string,
    image: string
}
