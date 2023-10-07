export * from '../models/Bucket';
export * from '../models/ChangeBucketAccess200Response';
export * from '../models/CreateBucket';
export * from '../models/CreateBucket201Response';
export * from '../models/CreateFolder';
export * from '../models/CreateFolder201Response';
export * from '../models/CreateFolder201ResponseData';
export * from '../models/CreateKey';
export * from '../models/CreateKey201Response';
export * from '../models/CreateKey201ResponseData';
export * from '../models/DownloadObject200Response';
export * from '../models/DownloadObject200ResponseData';
export * from '../models/GetHisotricalMetrics200Response';
export * from '../models/GetHisotricalMetrics200ResponseData';
export * from '../models/GetHisotricalMetrics200ResponseDataMetrics';
export * from '../models/GetMetricsSummary200Response';
export * from '../models/GetMetricsSummary200ResponseData';
export * from '../models/GetMetricsSummary200ResponseDataMetrics';
export * from '../models/GetMetricsSummary200ResponseDataMetricsTotolObjectsInner';
export * from '../models/GetMigrations200Response';
export * from '../models/GetSingleBuckets200Response';
export * from '../models/Key';
export * from '../models/KeyBucketsInner';
export * from '../models/Keys';
export * from '../models/ListBucket';
export * from '../models/MigrateBucket';
export * from '../models/Objects';
export * from '../models/ObjectsData';
export * from '../models/ObjectsDataObjects';
export * from '../models/ObjectsDataObjectsCommonPrefixesInner';
export * from '../models/ObjectsDataObjectsContentsInner';
export * from '../models/RevokeSecretKey200Response';
export * from '../models/Stat';
export * from '../models/StatData';
export * from '../models/StatDataObject';
export * from '../models/StatDataObjectMetaData';
export * from '../models/UpgradeBucket200Response';

import { Bucket } from '../models/Bucket';
import { ChangeBucketAccess200Response } from '../models/ChangeBucketAccess200Response';
import { CreateBucket } from '../models/CreateBucket';
import { CreateBucket201Response } from '../models/CreateBucket201Response';
import { CreateFolder } from '../models/CreateFolder';
import { CreateFolder201Response } from '../models/CreateFolder201Response';
import { CreateFolder201ResponseData } from '../models/CreateFolder201ResponseData';
import { CreateKey } from '../models/CreateKey';
import { CreateKey201Response } from '../models/CreateKey201Response';
import { CreateKey201ResponseData } from '../models/CreateKey201ResponseData';
import { DownloadObject200Response } from '../models/DownloadObject200Response';
import { DownloadObject200ResponseData } from '../models/DownloadObject200ResponseData';
import { GetHisotricalMetrics200Response } from '../models/GetHisotricalMetrics200Response';
import { GetHisotricalMetrics200ResponseData } from '../models/GetHisotricalMetrics200ResponseData';
import { GetHisotricalMetrics200ResponseDataMetrics } from '../models/GetHisotricalMetrics200ResponseDataMetrics';
import { GetMetricsSummary200Response } from '../models/GetMetricsSummary200Response';
import { GetMetricsSummary200ResponseData } from '../models/GetMetricsSummary200ResponseData';
import { GetMetricsSummary200ResponseDataMetrics } from '../models/GetMetricsSummary200ResponseDataMetrics';
import { GetMetricsSummary200ResponseDataMetricsTotolObjectsInner } from '../models/GetMetricsSummary200ResponseDataMetricsTotolObjectsInner';
import { GetMigrations200Response } from '../models/GetMigrations200Response';
import { GetSingleBuckets200Response } from '../models/GetSingleBuckets200Response';
import { Key } from '../models/Key';
import { KeyBucketsInner } from '../models/KeyBucketsInner';
import { Keys } from '../models/Keys';
import { ListBucket } from '../models/ListBucket';
import { MigrateBucket } from '../models/MigrateBucket';
import { Objects } from '../models/Objects';
import { ObjectsData } from '../models/ObjectsData';
import { ObjectsDataObjects } from '../models/ObjectsDataObjects';
import { ObjectsDataObjectsCommonPrefixesInner } from '../models/ObjectsDataObjectsCommonPrefixesInner';
import { ObjectsDataObjectsContentsInner } from '../models/ObjectsDataObjectsContentsInner';
import { RevokeSecretKey200Response } from '../models/RevokeSecretKey200Response';
import { Stat } from '../models/Stat';
import { StatData } from '../models/StatData';
import { StatDataObject } from '../models/StatDataObject';
import { StatDataObjectMetaData } from '../models/StatDataObjectMetaData';
import { UpgradeBucket200Response } from '../models/UpgradeBucket200Response';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/json-patch+json": 1,
  "application/merge-patch+json": 1,
  "application/strategic-merge-patch+json": 1,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
]);

let typeMap: {[index: string]: any} = {
    "Bucket": Bucket,
    "ChangeBucketAccess200Response": ChangeBucketAccess200Response,
    "CreateBucket": CreateBucket,
    "CreateBucket201Response": CreateBucket201Response,
    "CreateFolder": CreateFolder,
    "CreateFolder201Response": CreateFolder201Response,
    "CreateFolder201ResponseData": CreateFolder201ResponseData,
    "CreateKey": CreateKey,
    "CreateKey201Response": CreateKey201Response,
    "CreateKey201ResponseData": CreateKey201ResponseData,
    "DownloadObject200Response": DownloadObject200Response,
    "DownloadObject200ResponseData": DownloadObject200ResponseData,
    "GetHisotricalMetrics200Response": GetHisotricalMetrics200Response,
    "GetHisotricalMetrics200ResponseData": GetHisotricalMetrics200ResponseData,
    "GetHisotricalMetrics200ResponseDataMetrics": GetHisotricalMetrics200ResponseDataMetrics,
    "GetMetricsSummary200Response": GetMetricsSummary200Response,
    "GetMetricsSummary200ResponseData": GetMetricsSummary200ResponseData,
    "GetMetricsSummary200ResponseDataMetrics": GetMetricsSummary200ResponseDataMetrics,
    "GetMetricsSummary200ResponseDataMetricsTotolObjectsInner": GetMetricsSummary200ResponseDataMetricsTotolObjectsInner,
    "GetMigrations200Response": GetMigrations200Response,
    "GetSingleBuckets200Response": GetSingleBuckets200Response,
    "Key": Key,
    "KeyBucketsInner": KeyBucketsInner,
    "Keys": Keys,
    "ListBucket": ListBucket,
    "MigrateBucket": MigrateBucket,
    "Objects": Objects,
    "ObjectsData": ObjectsData,
    "ObjectsDataObjects": ObjectsDataObjects,
    "ObjectsDataObjectsCommonPrefixesInner": ObjectsDataObjectsCommonPrefixesInner,
    "ObjectsDataObjectsContentsInner": ObjectsDataObjectsContentsInner,
    "RevokeSecretKey200Response": RevokeSecretKey200Response,
    "Stat": Stat,
    "StatData": StatData,
    "StatDataObject": StatDataObject,
    "StatDataObjectMetaData": StatDataObjectMetaData,
    "UpgradeBucket200Response": UpgradeBucket200Response,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
