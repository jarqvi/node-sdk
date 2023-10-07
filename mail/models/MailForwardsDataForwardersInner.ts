/**
 * Liara Mail API Documentaion
 * A fully featured mail delivery platform for incoming & outgoing e-mail
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@liara.ir
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class MailForwardsDataForwardersInner {
    'account'?: string;
    'address'?: string;
    'createdAt'?: string;
    'id'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MailForwardsDataForwardersInner.attributeTypeMap;
    }

    public constructor() {
    }
}

