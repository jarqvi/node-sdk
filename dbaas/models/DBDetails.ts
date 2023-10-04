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

import { DBDetailsDatabase } from '../models/DBDetailsDatabase';
import { HttpFile } from '../http/http';

export class DBDetails {
    'database'?: DBDetailsDatabase;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "database",
            "baseName": "database",
            "type": "DBDetailsDatabase",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DBDetails.attributeTypeMap;
    }

    public constructor() {
    }
}
