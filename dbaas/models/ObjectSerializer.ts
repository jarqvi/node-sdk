export * from '../models/ChangeControlPanel200Response';
export * from '../models/CreateDatabase200Response';
export * from '../models/CreateDatabases';
export * from '../models/CreateDatabasesOptions';
export * from '../models/DBDetails';
export * from '../models/DBDetailsDatabase';
export * from '../models/DBDetailsDatabaseMetaData';
export * from '../models/DBDetailsDatabaseNode';
export * from '../models/DBsDetails';
export * from '../models/DBsDetailsDatabasesInner';
export * from '../models/DownloadBackup200Response';
export * from '../models/GetDatabaseSummaryReports200Response';
export * from '../models/GetDatabaseSummaryReports200ResponseCpuUsageInner';
export * from '../models/GetDatabaseSummaryReports200ResponseCpuUsageInnerValueInner';
export * from '../models/GetDatabaseSummaryReports200ResponseDisksUsageInner';
export * from '../models/GetListBackups200Response';
export * from '../models/GetListBackups200ResponseBackupsInner';
export * from '../models/Reports';
export * from '../models/ReportsResultInner';
export * from '../models/ResizeDatabaseRequest';
export * from '../models/TurnDatabaseRequest';

import { ChangeControlPanel200Response } from '../models/ChangeControlPanel200Response';
import { CreateDatabase200Response } from '../models/CreateDatabase200Response';
import { CreateDatabases } from '../models/CreateDatabases';
import { CreateDatabasesOptions } from '../models/CreateDatabasesOptions';
import { DBDetails } from '../models/DBDetails';
import { DBDetailsDatabase } from '../models/DBDetailsDatabase';
import { DBDetailsDatabaseMetaData } from '../models/DBDetailsDatabaseMetaData';
import { DBDetailsDatabaseNode } from '../models/DBDetailsDatabaseNode';
import { DBsDetails } from '../models/DBsDetails';
import { DBsDetailsDatabasesInner } from '../models/DBsDetailsDatabasesInner';
import { DownloadBackup200Response } from '../models/DownloadBackup200Response';
import { GetDatabaseSummaryReports200Response } from '../models/GetDatabaseSummaryReports200Response';
import { GetDatabaseSummaryReports200ResponseCpuUsageInner } from '../models/GetDatabaseSummaryReports200ResponseCpuUsageInner';
import { GetDatabaseSummaryReports200ResponseCpuUsageInnerValueInner } from '../models/GetDatabaseSummaryReports200ResponseCpuUsageInnerValueInner';
import { GetDatabaseSummaryReports200ResponseDisksUsageInner } from '../models/GetDatabaseSummaryReports200ResponseDisksUsageInner';
import { GetListBackups200Response } from '../models/GetListBackups200Response';
import { GetListBackups200ResponseBackupsInner } from '../models/GetListBackups200ResponseBackupsInner';
import { Reports } from '../models/Reports';
import { ReportsResultInner } from '../models/ReportsResultInner';
import { ResizeDatabaseRequest } from '../models/ResizeDatabaseRequest';
import { TurnDatabaseRequest } from '../models/TurnDatabaseRequest';

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
    "ChangeControlPanel200Response": ChangeControlPanel200Response,
    "CreateDatabase200Response": CreateDatabase200Response,
    "CreateDatabases": CreateDatabases,
    "CreateDatabasesOptions": CreateDatabasesOptions,
    "DBDetails": DBDetails,
    "DBDetailsDatabase": DBDetailsDatabase,
    "DBDetailsDatabaseMetaData": DBDetailsDatabaseMetaData,
    "DBDetailsDatabaseNode": DBDetailsDatabaseNode,
    "DBsDetails": DBsDetails,
    "DBsDetailsDatabasesInner": DBsDetailsDatabasesInner,
    "DownloadBackup200Response": DownloadBackup200Response,
    "GetDatabaseSummaryReports200Response": GetDatabaseSummaryReports200Response,
    "GetDatabaseSummaryReports200ResponseCpuUsageInner": GetDatabaseSummaryReports200ResponseCpuUsageInner,
    "GetDatabaseSummaryReports200ResponseCpuUsageInnerValueInner": GetDatabaseSummaryReports200ResponseCpuUsageInnerValueInner,
    "GetDatabaseSummaryReports200ResponseDisksUsageInner": GetDatabaseSummaryReports200ResponseDisksUsageInner,
    "GetListBackups200Response": GetListBackups200Response,
    "GetListBackups200ResponseBackupsInner": GetListBackups200ResponseBackupsInner,
    "Reports": Reports,
    "ReportsResultInner": ReportsResultInner,
    "ResizeDatabaseRequest": ResizeDatabaseRequest,
    "TurnDatabaseRequest": TurnDatabaseRequest,
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
