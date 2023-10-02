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

export class DBsDetailsDatabasesInner {
    /**
    * The ID of the database
    */
    'dBId'?: string;
    /**
    * The type of the database
    */
    'type'?: string;
    /**
    * The plan ID
    */
    'planID'?: string;
    /**
    * The status of the database
    */
    'status'?: string;
    /**
    * The scale of the database
    */
    'scale'?: number;
    /**
    * The hostname of the database
    */
    'hostname'?: string;
    /**
    * Indicates if the database is on a public network
    */
    'publicNetwork'?: boolean;
    /**
    * The creation timestamp of the database
    */
    'createdAt'?: string;
    /**
    * The internal port of the database
    */
    'internalPort'?: number;
    /**
    * The unique ID of the database
    */
    'id'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dBId",
            "baseName": "DBId",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "planID",
            "baseName": "planID",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "scale",
            "baseName": "scale",
            "type": "number",
            "format": ""
        },
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string",
            "format": ""
        },
        {
            "name": "publicNetwork",
            "baseName": "publicNetwork",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "internalPort",
            "baseName": "internalPort",
            "type": "number",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DBsDetailsDatabasesInner.attributeTypeMap;
    }

    public constructor() {
    }
}

