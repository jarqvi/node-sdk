/**
 * Object Storage API Documentaion
 * A scalable, reliable, and cost effective Object Storage solution to support your application from liara-cloud
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@liara.ir
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { StatDataObjectMetaData } from '../models/StatDataObjectMetaData';
import { HttpFile } from '../http/http';

export class StatDataObject {
    'size'?: number;
    'metaData'?: StatDataObjectMetaData;
    'lastModified'?: string;
    'versionId'?: string;
    'etag'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": ""
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "StatDataObjectMetaData",
            "format": ""
        },
        {
            "name": "lastModified",
            "baseName": "lastModified",
            "type": "string",
            "format": ""
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "etag",
            "baseName": "etag",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StatDataObject.attributeTypeMap;
    }

    public constructor() {
    }
}
