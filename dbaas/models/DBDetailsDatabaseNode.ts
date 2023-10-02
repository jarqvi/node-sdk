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

export class DBDetailsDatabaseNode {
    /**
    * The ID of the database node
    */
    'id'?: string;
    /**
    * The host of the database node
    */
    'host'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DBDetailsDatabaseNode.attributeTypeMap;
    }

    public constructor() {
    }
}

