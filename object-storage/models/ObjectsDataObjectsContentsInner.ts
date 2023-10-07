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

import { HttpFile } from '../http/http';

export class ObjectsDataObjectsContentsInner {
    'key'?: string;
    'lastModified'?: string;
    'eTag'?: string;
    'checksumAlgorithm'?: Array<any>;
    'size'?: number;
    'storageClass'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "Key",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastModified",
            "baseName": "LastModified",
            "type": "string",
            "format": ""
        },
        {
            "name": "eTag",
            "baseName": "ETag",
            "type": "string",
            "format": ""
        },
        {
            "name": "checksumAlgorithm",
            "baseName": "ChecksumAlgorithm",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "Size",
            "type": "number",
            "format": ""
        },
        {
            "name": "storageClass",
            "baseName": "StorageClass",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ObjectsDataObjectsContentsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

