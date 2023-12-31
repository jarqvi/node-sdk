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

import { CreateDatabasesOptions } from '../models/CreateDatabasesOptions';
import { HttpFile } from '../http/http';

export class CreateDatabases {
    /**
    * The hostname of databases that you want to create
    */
    'hostname'?: string;
    'options'?: CreateDatabasesOptions;
    /**
    * The publicNetwork of databases that you want to create
    */
    'publicNetwork'?: boolean;
    /**
    * The type of databases that you want to create
    */
    'type'?: string;
    /**
    * The planID of databases that you want to create
    */
    'planID'?: string;
    /**
    * The version of databases that you want to create
    */
    'version'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "CreateDatabasesOptions",
            "format": ""
        },
        {
            "name": "publicNetwork",
            "baseName": "publicNetwork",
            "type": "boolean",
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
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateDatabases.attributeTypeMap;
    }

    public constructor() {
    }
}

