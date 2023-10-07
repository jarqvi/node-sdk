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

import { ObjectsDataObjectsCommonPrefixesInner } from '../models/ObjectsDataObjectsCommonPrefixesInner';
import { ObjectsDataObjectsContentsInner } from '../models/ObjectsDataObjectsContentsInner';
import { HttpFile } from '../http/http';

export class ObjectsDataObjects {
    'isTruncated'?: boolean;
    'contents'?: Array<ObjectsDataObjectsContentsInner>;
    'name'?: string;
    'prefix'?: string;
    'delimiter'?: string;
    'maxKeys'?: number;
    'commonPrefixes'?: Array<ObjectsDataObjectsCommonPrefixesInner>;
    'keyCount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isTruncated",
            "baseName": "IsTruncated",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "contents",
            "baseName": "Contents",
            "type": "Array<ObjectsDataObjectsContentsInner>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "prefix",
            "baseName": "Prefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "delimiter",
            "baseName": "Delimiter",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxKeys",
            "baseName": "MaxKeys",
            "type": "number",
            "format": ""
        },
        {
            "name": "commonPrefixes",
            "baseName": "CommonPrefixes",
            "type": "Array<ObjectsDataObjectsCommonPrefixesInner>",
            "format": ""
        },
        {
            "name": "keyCount",
            "baseName": "KeyCount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ObjectsDataObjects.attributeTypeMap;
    }

    public constructor() {
    }
}

