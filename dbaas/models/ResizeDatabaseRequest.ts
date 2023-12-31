/**
 * DBaaS
 * Manage your databases using our API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@liara.ir
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ResizeDatabaseRequest {
    'disk'?: boolean;
    'planID': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "disk",
            "baseName": "disk",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "planID",
            "baseName": "planID",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ResizeDatabaseRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

