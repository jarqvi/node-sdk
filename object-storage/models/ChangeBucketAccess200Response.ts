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

export class ChangeBucketAccess200Response {
    'status'?: string;
    'permission'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "permission",
            "baseName": "permission",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ChangeBucketAccess200Response.attributeTypeMap;
    }

    public constructor() {
    }
}
