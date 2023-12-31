/**
 * DNS
 * Manage dns zones and records
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@liara.ir
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Zone } from '../models/Zone';
import { HttpFile } from '../http/http';

export class Zones {
    'status'?: string;
    'data'?: Array<Zone>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Zone>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Zones.attributeTypeMap;
    }

    public constructor() {
    }
}

